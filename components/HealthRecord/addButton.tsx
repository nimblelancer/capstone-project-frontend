// components/healthRecord/AddButton.tsx

import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
      Add
    </button>
  );
};

export default AddButton;
