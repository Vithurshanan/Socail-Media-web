import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Payload:", payload);
  console.log("Event Data:", evt.data);

  if (eventType === "user.created") {
    try {
      const username = evt.data.username || payload.data.username;
      const avatar = evt.data.image_url || payload.data.image_url || "/noAvatar.png";

      if (!username) {
        console.error("Username is missing in the payload");
        return new Response("Username is required", { status: 400 });
      }

      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: username,
          avatar: avatar,
          cover: "/noCover.png",
        },
      });
      return new Response("User has been created!", { status: 200 });
    } catch (err) {
      console.error(err);
      return new Response("Failed to create the user!", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    try {
      const username = evt.data.username || payload.data.username;
      const avatar = evt.data.image_url || payload.data.image_url || "/noAvatar.png";

      await prisma.user.update({
        where: {
          id: evt.data.id,
        },
        data: {
          username: username,
          avatar: avatar,
        },
      });
      return new Response("User has been updated!", { status: 200 });
    } catch (err) {
      console.error(err);
      return new Response("Failed to update the user!", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
