import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || new Date().toISOString(),
      createdAt: pasteId ? undefined : new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="w-full bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {pasteId ? "Edit Your Paste" : "Create a New Paste"}
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full">
          <input
            className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 text-gray-700 w-full"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={createPaste}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 w-full md:w-auto"
          >
            {pasteId ? "Update My Paste" : "Create My Paste"}
          </button>
        </div>
        <div>
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 text-gray-700"
            value={value}
            placeholder="Enter content here"
            onChange={(e) => setValue(e.target.value)}
            rows={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
