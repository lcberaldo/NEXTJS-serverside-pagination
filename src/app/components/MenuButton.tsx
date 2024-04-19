'use client'

import 'rsuite/Popover/styles/index.css';
import Hamburger from 'hamburger-react'
import { useRef, useState } from 'react'
import { Button, Popover, Whisper } from 'rsuite'
import ModalComponent from './Modal'
import { CheckSquare, HouseSimple, Note, PlusCircle, UserCircle } from '@phosphor-icons/react';
import Link from 'next/link';

export default function MenuButton() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const whisperRef = useRef(null)

  function handleCreateModal(e: React.FormEvent) {
    e.preventDefault()

    if (!whisperRef.current) {
      throw Error()
    }

    setMenuOpen(!isMenuOpen)
    whisperRef.current.close()

    handleOpen()
  }


  const speaker = (
    <Popover style={{ padding: 20 }} >
      <Link href='/' className='flex gap-2 mb-2'>
        <HouseSimple size={20} color='black' />
        <span className='text-black  font-bold'>Home</span>
      </Link>

      <Link href='/profile' className='flex gap-2 mb-2'>
        <UserCircle size={20} color='black' />
        <span className='text-black  font-bold'>Profile</span>
      </Link>

      <button onClick={handleCreateModal} className='flex gap-2 mb-2'>
        <PlusCircle size={20} color='black' />
        <span className='text-black  font-bold'>Add Post</span>
      </button>

      <button className='flex gap-2 mb-2'>
        <CheckSquare size={20} color='black' />
        <span className='text-black  font-bold'>Select</span>
      </button>


      <Link href='/my-posts' className='gap-2 flex '>
        <Note size={20} color='black' />
        <span className='text-black  font-bold'>My posts</span>
      </Link>
    </Popover>
  );

  return (
    <>
      <ModalComponent open={open} onClose={handleClose} />

      <Whisper
        placement="bottom"
        trigger="click"
        speaker={speaker}
        ref={whisperRef}

      >
        <Button ><Hamburger toggled={isMenuOpen} toggle={setMenuOpen} size={30} /></Button>
      </Whisper>

    </>
  )
}
