import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [showSharePopup, setShowSharePopup] = useState(false);
  const [linkToShare, setLinkToShare] = useState("");

  function handleShare(pasteId) {
    const url = `${window.location.origin}/pastes/${pasteId}`;
    setLinkToShare(url);
    setShowSharePopup(true);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(linkToShare);
    toast.success("Link copied to clipboard");
  }

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <input
        type="search"
        className="p-3 rounded-xl w-full border border-gray-300 mt-5 focus:outline-none focus:border-blue-500"
        placeholder="Search pastes by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-6 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => {
            const formattedDate = new Date(paste.createdAt);
            const dateIsValid = !isNaN(formattedDate);

            return (
              <div
                key={paste._id}
                className="border p-5 rounded-lg shadow-md bg-white"
              >
                <div className="font-bold text-xl text-gray-800">
                  {paste.title}
                </div>
                <div className="mt-2 text-gray-600">{paste.content}</div>
                <div className="flex flex-row gap-4 mt-4 justify-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleShare(paste?._id)}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
                    title="Share this paste"
                  >
                    Share
                  </button>
                </div>
                <div className="mt-3 text-gray-500 text-sm">
                  {dateIsValid
                    ? `Created on: ${formattedDate.toLocaleString()}`
                    : "Date not available"}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-gray-500 text-center mt-5">No pastes found</div>
        )}
      </div>
      {showSharePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Share this Paste</h3>
            <p className="mb-4">Copy the link below to share:</p>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={linkToShare}
                readOnly
                className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
              />
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
            <button
              onClick={() => setShowSharePopup(false)}
              className="text-red-500 font-semibold mt-2 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paste;
