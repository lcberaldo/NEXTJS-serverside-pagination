'use client'

import 'rsuite/Popover/styles/index.css';
import { Button, Popover, Whisper } from 'rsuite';
import { CheckSquare, PlusCircle, } from '@phosphor-icons/react';
import { Twirl as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react';




const Menu = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const whisperRef = useRef(null)




  function handleCreateModal(e: React.FormEvent) {
    e.preventDefault()

    if (whisperRef.current) {
      setMenuOpen(!isMenuOpen)
      whisperRef.current.close()
    }
  }


  const speaker = (
    <Popover style={{ padding: 20 }} >
      <button onClick={handleCreateModal} className='p-2 bg-green-500 rounded-lg mr-2 '><PlusCircle size={30} color='#fff' /></button>
      <button className='p-2 bg-blue-500 rounded-lg ml-2 '><CheckSquare size={30} color='#fff' /></button>
    </Popover>
  );

  return (
    <div className="relative"  >

      <Whisper
        placement="left"
        trigger="click"
        speaker={speaker}
        ref={whisperRef}

      >
        <Button ><Hamburger toggled={isMenuOpen} toggle={setMenuOpen} size={30} /></Button>
      </Whisper>


    </div >
  )
}

export default Menu
