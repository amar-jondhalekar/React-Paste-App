import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(''); 
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId"); 
  return (
    <div>
        <input className='p-2 rounded-2xl mt-2' 
        type="text"
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <button>
            {
                pasteId ? "Update My Paste" : "Create My Paste"
            }
        </button>
    </div>
  )
}

export default Home