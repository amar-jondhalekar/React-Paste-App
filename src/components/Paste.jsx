import React from 'react'
import { useSelector } from 'react-redux'

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);

  return (
    <div>List of pastes </div>
  )
}

export default Paste