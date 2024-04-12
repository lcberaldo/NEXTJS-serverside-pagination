import { Post } from '@/types'
import Card from '../components/Card'
import Form from '../components/Form'

import Link from 'next/link'
import { ArrowBendDownLeft } from '@phosphor-icons/react/dist/ssr/ArrowBendDownLeft'


type ParampsProps = {
  params: {
    postId: string
  }
}

const PostPage = async ({ params }: ParampsProps) => {
  const response = await fetch(process.env.URL + '/api/posts', { cache: "no-store" })
  const json: Post[] = await response.json()


  const { postId } = params
  const desiredPost = json.find((post: Post) => String(post.id) === postId)


  if (!desiredPost) return



  return (
    <>
      <div className='max-w-5xl pt-10 mb-24  flex align-center justify-between mx-auto'>
        <h1 className='text-4xl text-center font-bold'>Post edit</h1>

        <Link href='/'>
          <ArrowBendDownLeft size={30} />
        </Link>
      </div >

      <div className='max-w-5xl flex align-top justify-center gap-20  mx-auto pb-12' >
        <Card post={desiredPost} />

        <Form formType='patch' postId={postId} />
      </div>
    </>
  )
}

export default PostPage
