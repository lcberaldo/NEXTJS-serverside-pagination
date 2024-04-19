import { Post } from '@/types'
import Image from 'next/image'
import React from 'react'

type PostProps = {
  post: Post,
}

const Card = ({ post }: PostProps) => {

  return (
    <div className='max-w-xs rounded-2xl overflow-hidden bg-zinc-200'>
      <div className='w-full'>
        <Image src={post?.image_url} width={650} height={200} alt='' />
      </div>
      <div className='py-6 px-4 text-black min-h-52'>
        <h2 className='font-bold text-lg' >{post?.title}</h2>
        <p>{post?.content}</p>
      </div>

    </div>
  )
}

export default Card
