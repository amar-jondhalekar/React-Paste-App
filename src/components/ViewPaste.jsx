import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">View Paste</h1>

      <div className="w-full">
        <input
          className="p-3 rounded-xl w-full text-lg bg-gray-200 border border-gray-300 text-gray-700 focus:outline-none"
          type="text"
          placeholder="Title"
          value={paste?.title || ""}
          disabled
        />
      </div>

      <div className="w-full mt-6">
        <textarea
          className="p-4 rounded-xl w-full min-h-[300px] bg-gray-200 border border-gray-300 text-gray-700 text-lg resize-none focus:outline-none"
          placeholder="Content"
          value={paste?.content || ""}
          disabled
          rows={10}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
