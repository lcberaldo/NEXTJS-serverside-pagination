import { Post } from '@/types'
import Card from '../components/Card'
import Form from './components/Form'
import Backbutton from './components/Backbutton'

type ParampsProps = {
  params: {
    postId: string
  }
}

const PostPage = async ({ params }: ParampsProps) => {
  const response = await fetch(process.env.URL + '/api/posts')
  const json = await response.json()

  const { postId } = params
  const desiredPost = json.find((post: Post) => post.id === Number(postId))




  return (
    <>
      <div className='max-w-4xl pt-12 pb-10  flex align-center justify-between mx-auto'>
        <h1 className='text-2xl text-center font-bold'>Post edit</h1>

        <Backbutton />
      </div >

      <div className='max-w-5xl flex align-top justify-center gap-20  mx-auto pb-12' >
        <Card post={desiredPost} />

        <Form postId={postId} />
      </div>
    </>
  )
}

export default PostPage
