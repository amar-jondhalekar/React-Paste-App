import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);  // Log pastes to check the structure and content

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Filter pastes by title based on searchTerm
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        type="search"
        className="p-2 rounded-2xl min-w-[600px] mt-5"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => {
            console.log("Paste createdAt: ", paste.createdAt);  // Log createdAt field
            const formattedDate = new Date(paste.createdAt);
            const dateIsValid = !isNaN(formattedDate); // Check if the date is valid

            return (
              <div key={paste._id} className="border p-4 rounded-lg">
                <div className="font-bold text-lg">{paste.title}</div>
                <div className="mt-2">{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly mt-3">
                  <button>Edit</button>
                  <button>View</button>
                  <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to clipboard");
                  }}>Copy</button>
                  <button>Share</button>
                </div>
                <div className="mt-2">
                  {/* Check if createdAt is valid and display the date */}
                  {dateIsValid
                    ? formattedDate.toLocaleString()
                    : 'Date not available'}
                </div>
              </div>
            );
          })
        ) : (
          <div>No pastes found</div> // Display message if no pastes match search term
        )}
      </div>
    </div>
  );
};

export default Paste;
