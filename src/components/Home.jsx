import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(''); 
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId"); 
  return (
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded-2xl mt-2' 
        type="text"
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button className='p-2 rounded-2xl mt-2'>
            {
                pasteId ? "Update My Paste" : "Create My Paste"
            }
        </button>
    </div>
    <div className='mt-8'>
        <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'
        value={value}
        placeholder='Enter content here'
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        />
    </div>
   </div>
  )
}

export default Home