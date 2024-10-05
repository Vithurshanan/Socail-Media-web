import Image from "next/image";
import Comments from "./Comments";




const Post = () => {

    return (
        <div className="flex flex-col gap-4">
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/28525048/pexels-photo-28525048/free-photo-of-elegant-portrait-of-woman-in-fashionable-gown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load40"
                        width={40}
                        height={40}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">
                        Jack
                    </span>
                </div>
                <Image
                    src="/more.png"
                    alt=""
                    width={16}
                    height={16}

                />

            </div>
            {/* DESC */}
            <div className="flex flex-col gap-4">

                <div className="w-full min-h-96 relative">
                    <Image
                        src="https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover rounded-md"
                        alt=""
                        fill
                    />
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, facilis similique cum quam nihil magnam labore aspernatur repellendus doloremque ipsa commodi quia, maxime qui! Quidem similique saepe distinctio rerum alias.</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/like.png"
                            className="cursor-pointer"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image
                            src="/comment.png"
                            className="cursor-pointer"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                        <Image
                            src="/share.png"
                            className="cursor-pointer"
                            alt=""
                            width={16}
                            height={16}
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123 <span className="hidden md:inline"> Share</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default Post;