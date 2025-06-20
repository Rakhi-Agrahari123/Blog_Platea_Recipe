// import React, { useState } from "react";
// import { createCuisine } from "../api/cuisineApi";
// import CuisineList from "./CuisineList";

// const CuisineForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     origin: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createCuisine(formData);
//       alert("Cuisine added successfully!");
//       setFormData({ name: "", description: "", origin: "", image: "" });
//     } catch (err) {
//       alert("Error adding cuisine");
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <div className="h-auto w-[100vw] flex flex-col bg-gray-200 px-8 py-5 ">
//         <div className="left pt-5">
//           <CuisineList />
//         </div>

//         <div className="right w-full">
//           <form
//             onSubmit={handleSubmit}
//             className="mt-10 space-y-4 max-w-lg mx-auto bg-lime-800 shadow rounded-2xl text-white border-2 p-10"
//           >
//             <label>Cuisine Name :</label>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Cuisine Name"
//               required
//               className="w-full p-2 border rounded "
//             />
//             <label>Origin :</label>
//             <input
//               name="origin"
//               value={formData.origin}
//               onChange={handleChange}
//               placeholder="Origin"
//               className="w-full p-2 border rounded"
//             />

//             <label>Image URL or Link :</label>
//             <input
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="Image URL"
//               className="w-full p-2 border rounded"
//             />

//             <label>Description:</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="w-full p-2 border rounded"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Add Cuisine
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CuisineForm;

import axios from 'axios';
import React, { useState } from 'react';
// import { fetchCuisines } from '../api/cuisineApi';
import CuisineList from './CuisineList';

const CuisineForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    image: null,  // will hold the File object
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

//   const [loading, setLoading] = useState(false);
//   try {
//   setLoading(true);
//   await axios.post('http://localhost:5000/api/cuisines', data);
//   alert("Cuisine added");
//   setFormData({ name: '', description: '', origin: '', image: null });
//   setPreview(null);
// } catch (err) {
//   console.error("Error:", err);
//   alert("Something went wrong!");
// } finally {
//   setLoading(false);
// }


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = new FormData();
  //     data.append('name', formData.name);
  //     data.append('origin', formData.origin);
  //     data.append('description', formData.description);
  //     if (formData.image) {
  //       data.append('image', formData.image);
  //     }

  //     await createCuisine(data); // Make sure this API accepts FormData

  //     alert('Cuisine added successfully!');
  //     setFormData({ name: '', description: '', origin: '', image: null });
  //     setPreview(null);
  //   } catch (err) {
  //     alert('Error adding cuisine');
  //     console.error(err);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('name', formData.name);
  data.append('origin', formData.origin);
  data.append('description', formData.description);
  data.append('image', formData.image); // this must be a File (from input type="file")

  try {
    await axios.post('http://localhost:5000/api/cuisines', data);
    alert("Cuisine added");
  } catch (err) {
    console.error("Error:", err);
  }
};

  return (
    <div className="h-auto w-[100vw] flex flex-col bg-yellow-400 px-8 py-5">
      <div className="left pt-5">
        <CuisineList />
      </div>

      <div className="right w-full">
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 max-w-md mx-auto bg-lime-800 shadow rounded-2xl text-white border-2 p-10"
        >
          <label>Cuisine Name :</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Cuisine Name"
            required
            className="w-full p-2 border rounded"
          />

          <label>Origin :</label>
          <input
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="Origin"
            className="w-full p-2 border rounded"
          />

          <label>Image Upload :</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            // onChange={handleFileChange}
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})} 

            className="w-full p-2 border rounded"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover mt-2 rounded"
            />
          )}

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Cuisine
          </button>

{/* <button
  type="submit"
  disabled={loading}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
>
  {loading ? "Adding..." : "Add Cuisine"}
</button> */}


        </form>
      </div>
    </div>
  );
};

export default CuisineForm;


