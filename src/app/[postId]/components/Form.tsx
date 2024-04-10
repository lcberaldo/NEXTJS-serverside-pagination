'use client'

import api from "@/axios"
import { useRouter } from "next/navigation"

type ParampsProps = {
  postId: string
}

const Form = ({ postId }: ParampsProps) => {

  const router = useRouter()

  async function handleEditForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget

    const formElements = form.elements as typeof form.elements & {
      title: HTMLInputElement,
      image_url: HTMLInputElement,
      body: HTMLInputElement
    }

    const title = formElements.title.value
    const image_url = formElements.image_url.value
    const body = formElements.body.value

    const options = {
      method: 'patch',
      url: '/posts',
      data: {
        id: postId,
        title,
        image_url,
        body
      },
      cache: false
    };

    await api(options)

    formElements.image_url.value = ''
    formElements.title.value = ''
    formElements.body.value = ''

    router.refresh()
  }

  return (
    <form onSubmit={handleEditForm} className=' w-full  flex  flex-col  bg-zinc-200 rounded-2xl pt-14 pb-8 px-10 text-black'>

      <label className='block font-bold mb-10' htmlFor="img_url">Image URL
        <input className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="image_url" id="" />
      </label>

      <label className='block font-bold mb-10' htmlFor="title">Title
        <input className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="title" id="" />
      </label>

      <label className='block font-bold mb-10' htmlFor="body">Body
        <input className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="body" id="" />
      </label>

      <div className="mt-auto flex items-center justify-between">

        <button className=' cursor-pointer text-left w-fit py-4 px-16 bg-green-500 font-bold text-white rounded-xl'>Publish</button>

        <button className="cursor-pointer text-left w-fit py-4 px-16 bg-red-500 font-bold text-white rounded-xl">Delete</button>

      </div>
    </form>
  )
}

export default Form
