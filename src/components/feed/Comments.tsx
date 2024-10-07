import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div className=''>
            {/* WRITE*/}
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.pexels.com/photos/28123033/pexels-photo-28123033/free-photo-of-photo-of-a-woman-wearing-traditional-clothing-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=''
                    height={32}
                    width={32}
                    className='w-8 h-8 rounded-full'
                />
                <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                    <input
                        type="text"
                        placeholder='Write a comment...'
                        className='bg-transparent outline-none flex-1'
                    />
                    <Image
                        src="/emoji.png"
                        alt=''
                        height={16}
                        width={16}
                        className='cursor-pointer'
                    />
                </div>
            </div>
            {/* COMMENTs*/}
            <div className=''>
                {/* COMMENT*/}
                <div className='flex gap-4 justify-between mt-6'>
                    {/* AVATAR*/}
                    <div className=''>
                        <Image
                            src="https://images.pexels.com/photos/28123033/pexels-photo-28123033/free-photo-of-photo-of-a-woman-wearing-traditional-clothing-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt=''
                            height={40}
                            width={40}
                            className='w-8 h-8 rounded-full'
                        />
                    </div>
                    {/* DESC*/}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-medium'>Bennice spencer</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium </p>
                        <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                            <div className='flex items-center gap-4'>
                                <Image
                                    src="/like.png"
                                    alt=''
                                    width={12}
                                    height={12}
                                    className='cursor-pointer w-4 h-4'
                                />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500'>123 Likes</span>
                            </div>
                            <div>Reply</div>
                        </div>
                    </div>
                    {/* ICON*/}
                    <Image
                        src="/more.png"
                        alt=''
                        width={16}
                        height={16}
                        className='cursor-pointer w-4 h-4'
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments
