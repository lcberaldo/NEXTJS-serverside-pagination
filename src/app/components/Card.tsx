import { CardType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({ post }: CardType) => {


  const { title, body, image_url } = post



  return (
    <div className='max-w-xs rounded-2xl overflow-hidden bg-zinc-200'>
      <div className='w-full'>
        <Image priority={true} src={image_url} width={650} height={200} alt='' />
      </div>
      <div className='py-6 px-4 text-black'>
        <h2 className='font-bold text-lg' >{title}</h2>
        <p>{body}</p>
      </div>

    </div>
  )
}

export default Card
