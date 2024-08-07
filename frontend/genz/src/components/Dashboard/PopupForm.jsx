import React, { useState } from "react";

const PopupForm = ({ onClose, onAddCommunity }) => {
  const [communityName, setCommunityName] = useState("");
  const [communityColor, setCommunityColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (communityName && communityColor) {
      onAddCommunity({ heading: communityName, color: communityColor });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Add Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Community Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Community Color</label>
            <input
              type="color"
              className="w-full px-3 py-2 border rounded"
              value={communityColor}
              onChange={(e) => setCommunityColor(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
