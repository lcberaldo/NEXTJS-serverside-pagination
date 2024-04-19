'use client'


import { Post } from '@/types'
import React, { useState } from 'react'
import Card from './Card'
import Link from 'next/link'

type ContainerProps = {
  entries?: Post[]
}




export const CardContainer = ({ entries }: ContainerProps) => {


  return (
    <ul className="flex gap-y-10 justify-between  flex-wrap">

      {entries?.map((post: Post) => {
        return (
          <Link href={String(post.id)} key={post.id} >
            <li className='max-w-xs rounded-2xl overflow-hidden h-full bg-zinc-200' >
              <Card post={post} />
            </li>
          </Link>
        )
      }
      )}

    </ul>
  )
}

