import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
        <input type="search"
        className='p-2 rounded-2xl min-w-[600px] mt-5' 
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default Paste