import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes); // Log pastes to check the structure and content

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Filter pastes by title based on searchTerm
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
            console.log("Paste createdAt: ", paste.createdAt); // Log createdAt field
            const formattedDate = new Date(paste.createdAt);
            const dateIsValid = !isNaN(formattedDate); // Check if the date is valid

            return (
              <div key={paste._id} className="border p-4 rounded-lg">
                <div className="font-bold text-lg">{paste.title}</div>
                <div className="mt-2">{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly mt-3">
                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleShare(paste?._id)}
                    title="Share this paste"
                  >
                    Share
                  </button>
                </div>
                <div className="mt-2">
                  {/* Check if createdAt is valid and display the date */}
                  {dateIsValid
                    ? formattedDate.toLocaleString()
                    : "Date not available"}
                </div>
              </div>
            );
          })
        ) : (
          <div>No pastes found</div> // Display message if no pastes match search term
        )}
      </div>
      {/* Share Popup */}
      {showSharePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Share this Paste</h3>
            <p className="mb-4">Copy the link below to share:</p>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={linkToShare}
                readOnly
                className="flex-1 p-2 border rounded-md mr-2"
              />
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Copy
              </button>
            </div>
            <button
              onClick={() => setShowSharePopup(false)}
              className="text-red-500 font-bold mt-2"
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
