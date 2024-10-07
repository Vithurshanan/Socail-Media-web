import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>
            {/* User*/}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'> 
                    <img
                        src="https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Horse"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <span>Wayn Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
             {/* User*/}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'> 
                    <img
                        src="https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Horse"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <span>Wayn Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
             {/* User*/}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'> 
                    <img
                        src="https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Horse"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <span>Wayn Burton</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <Image src="/accept.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image src="/reject.png"
                        alt=''
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default FriendRequests
