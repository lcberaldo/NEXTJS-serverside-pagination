'use client'

import { headers } from "next/headers"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

type ParampsProps = {
  postId?: string
  formType: 'PATCH' | 'POST',
  closeModal?: () => void
}

const Form = ({ postId, formType, closeModal }: ParampsProps) => {
  const [isRequired, setRequired] = useState(() => {
    if (formType === 'POST') return true
  })

  const router = useRouter()

  async function handleDeletePost() {

    if (postId) {
      const options = {
        method: 'DELETE',
        body: JSON.stringify({
          id: postId,
        }),
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      };


      const response = await fetch('/api/posts/', options)

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
    const content = formElements.body.value


    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method: formType,
      headers: myHeaders,
      body: JSON.stringify({
        title, image_url, content, id: postId
      })
    }

    if (options.method === 'POST' && closeModal) {
      closeModal();
    }
    const response = await fetch('/api/posts/', options)

    const json = await response.json()

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

        {formType === 'PATCH' && (

          <button className="cursor-pointer text-left w-fit py-4 px-16 bg-red-500 font-bold text-white rounded-xl">Delete</button>

        )}
      </div>
    </form>
  )
}

export default Form
