'use client'

import api from "@/axios"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

type ParampsProps = {
  postId?: string
  formType: 'patch' | 'post',
  closeModal?: () => void
}

const Form = ({ postId, formType, closeModal }: ParampsProps) => {
  const [isRequired, setRequired] = useState(() => {
    if (formType === 'post') return true
  })

  const router = useRouter()

  async function handleDeletePost() {




    if (postId) {



      const options = {
        method: 'delete',
        url: '/posts',
        data: {
          id: postId,
        },
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      };



      const response = await api(options)



      router.push('/')
      router.refresh()

    }
  }

  async function handleSubmitForm(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault()

    const isDelete = event.nativeEvent.submitter?.textContent === 'Delete' && true

    if (isDelete) {
      handleDeletePost()
      return
    }

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
      method: formType,
      url: '/posts',
      data: {
        id: postId || null,
        title,
        image_url,
        body
      },

    };

    if (options.method === 'post' && closeModal) {
      closeModal();
    }


    await api(options)


    formElements.image_url.value = ''
    formElements.title.value = ''
    formElements.body.value = ''

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmitForm} className=' w-full  flex  flex-col  bg-zinc-200 rounded-2xl pt-14 pb-8 px-10 text-black'>

      <label className='block font-bold mb-10' htmlFor="img_url">Image URL
        <input required={isRequired} className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="image_url" id="" />
      </label>

      <label className='block font-bold mb-10' htmlFor="title">Title
        <input required={isRequired} className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="title" id="" />
      </label>

      <label className='block font-bold mb-10' htmlFor="body">Body
        <input required={isRequired} className='w-full rounded-md bg-zinc-400 text-black px-3 py-1' type="text" name="body" id="" />
      </label>

      <div className="mt-auto flex items-center justify-between">

        <button className=' cursor-pointer text-left w-fit py-4 px-16 bg-green-500 font-bold text-white rounded-xl'>Publish</button>

        {formType === 'patch' && (

          <button className="cursor-pointer text-left w-fit py-4 px-16 bg-red-500 font-bold text-white rounded-xl">Delete</button>

        )}
      </div>
    </form>
  )
}

export default Form
