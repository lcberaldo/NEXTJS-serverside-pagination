import Menu from '../components/Menu'
import Image from 'next/image'

import profileImg from '../../assets/imgplaceholder.jpg'

import { cookies } from 'next/headers'
import { getUserInfoAction } from '@/actions/loggedActions'



export default async function Profile() {

  const userId = Number(cookies().get('SessionId')?.value)

  if (!userId) return

  const user = await getUserInfoAction(userId)

  const { username, id, email, name } = user

  return (
    <div className="mx-auto max-w-5xl py-10">

      <Menu>My Profile</Menu>

      <div className='flex flex-col justify-center items-center gap-y-5'>
        <Image
          className='rounded-full'
          src={profileImg}
          width={300}
          height={300}
          alt={`foto de perfil de ${name}`}
        />

        <h2 className='text-3xl font-bold'>{name} <span className='italic text-gray-500 font-normal text-xl' >#{id}</span></h2>

        <h3 className='font-bold text-xl '>{username}</h3>

        <h3 className='italic'>{email}</h3>
      </div>

    </div>
  )
}
