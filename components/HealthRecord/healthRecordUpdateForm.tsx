// HealthRecordUpdateForm.jsx

// import React, { useState, useEffect } from 'react';

// const HealthRecordUpdateForm = ({ healthRecord, onUpdate, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     relationshipType: '',
//   });

//   useEffect(() => {
//     if (healthRecord) {
//       setFormData({
//         name: healthRecord.name || '',
//         age: healthRecord.age || '',
//         gender: healthRecord.gender || '',
//         relationshipType: healthRecord.relationshipType || '',
//       });
//     }
//   }, [healthRecord]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="border p-4">
//       <div className="mb-4">
//         <label htmlFor="name" className="block">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="age" className="block">Age:</label>
//         <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="gender" className="block">Gender:</label>
//         <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="relationshipType" className="block">Relationship:</label>
//         <input type="text" id="relationshipType" name="relationshipType" value={formData.relationshipType} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
//       </div>

//       <div className="flex">
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
//           Update
//         </button>
//         <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default HealthRecordUpdateForm;
