import React, { useState } from 'react';

const HealthRecordForm = ({ onSubmit, onCancel, initialValues }) => {
  // State to track form data and validity of each field
  const [formData, setFormData] = useState(initialValues || {});
  const [errors, setErrors] = useState({});

  // Function to handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors for the field being updated
    setErrors({ ...errors, [name]: '' });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.age) {
      validationErrors.age = 'Age is required';
    } else if (isNaN(formData.age)) {
      validationErrors.age = 'Age must be a number';
    }
    if (!formData.gender) {
      validationErrors.gender = 'Gender is required';
    }
    if (!formData.relationshipType) {
      validationErrors.relationshipType = 'Relationship is required';
    }
    // If there are validation errors, set them and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no validation errors, submit the form data
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block">Name:</label>
        <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block">Age:</label>
        <input type="text" id="age" name="age" value={formData.age || ''} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        {errors.age && <p className="text-red-500">{errors.age}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block">Gender:</label>
        <input type="text" id="gender" name="gender" value={formData.gender || ''} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="relationshipType" className="block">Relationship:</label>
        <input type="text" id="relationshipType" name="relationshipType" value={formData.relationshipType || ''} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
        {errors.relationshipType && <p className="text-red-500">{errors.relationshipType}</p>}
      </div>


      <div className="flex">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Save
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default HealthRecordForm;


