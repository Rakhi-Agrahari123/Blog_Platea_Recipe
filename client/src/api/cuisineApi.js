// cuisineApi.js
import axios from 'axios';

 export const fetchCuisines = (formData) => {
  return axios.post('http://localhost:5000/api/cuisines', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};


// src/api/cuisineApi.js

// import axios from "axios";

// export const fetchCuisines = async () => {
//   const response = await axios.get("http://localhost:5000/api/cuisines");
//   return response.data;
// };
