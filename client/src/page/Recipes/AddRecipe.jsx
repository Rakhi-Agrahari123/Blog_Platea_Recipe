// // // import React from 'react';
// // // import Img from "../../assets/taxonomies-bg.svg"
// // // import Heading from '../../utility/Heading';
// // // import ButtonRed from '../../utility/ButtonRed';


// // // const AddRecipe = () => {
// // //   return (
// // //     // AddRecipe section for create recipes
// // //     <section className="w-full">
// // //       <div className="h-[350px] flex justify-center items-center relative bg-[#F4F4F4] w-full">
// // //         <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
// // //         <Heading name={"Add Recipe"} desc={"Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations."}/>
// // //       </div>

// // //       <div className="h-[100vh] flex justify-center items-center my-[40px] w-full">
// // //         <form className="flex flex-col items-center justify-center w-[65%] border-1 border-[#D4D4D4] rounded-2xl p-5">
// // //           <div className="w-full flex justify-between items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Title</label>
// // //             <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
// // //           </div>

// // //           <div className="w-full flex justify-between items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Description</label>
// // //             <textarea name="" id="" className="border-1 rounded-[8px] px-4 py-4 w-3/4  border-[#D4D4D4]" cols="30" rows="10"></textarea>
// // //           </div>

// // //           <div className="w-full flex justify-start items-center gap-4 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Image</label>
// // //             <input type="file" name="" id="" className="border-1 rounded-[8px] w-fit border-[#D4D4D4] px-3 py-4" placeholder='Choose Image' />
// // //           </div>

// // //           <div className="w-full flex justify-start items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Ingredients</label>
// // //             <input type="checkbox" name="" id="" className="border-1 w-fit rounded-[8px] border-[#D4D4D4] px-4 py-4" />
// // //           </div>

// // //           <div className="w-full flex justify-between items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Steps</label>
// // //             <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
// // //           </div>

// // //           <div className="w-full flex justify-between items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Tags</label>
// // //             <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
// // //           </div>

// // //           <div className="w-full flex justify-between items-center gap-5 py-3">
// // //             <label htmlFor="" className="w-1/4 text-[14px] font-[700] uppercase">Author</label>
// // //             <input type="text" name="" id="" className="border-1 rounded-[8px]  w-3/4 border-[#D4D4D4] px-4 py-4" />
// // //           </div>

// // //           <ButtonRed name={"Submit"} style={"mt-5"} />
// // //         </form>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default AddRecipe;

// // import React, { useState } from "react";
// // import ReactQuill from "react-quill"; // react-quill package
// // import "react-quill/dist/quill.snow.css";
// // import hljs from "highlight.js";
// // import "highlight.js/styles/github.css";
// // import Heading from '../../utility/Heading';
// // import ButtonRed from '../../utility/ButtonRed';
// // import Img from "../../assets/taxonomies-bg.svg"

// // import { useDispatch } from "react-redux";
// // import { createRecipe } from "../../redux/slices/AuthSlice"; // Adjust path if needed



// // const modules = {
// //   syntax: {
// //     highlight: (text) => hljs.highlightAuto(text).value,
// //   },
// //   toolbar: [
// //     [{ header: [1, 2, 3, false] }],
// //     [{ font: [] }],
// //     [{ align: [] }],
// //     ["bold", "italic", "underline", "strike"],
// //     [{ color: [] }, { background: [] }],
// //     [{ list: "ordered" }, { list: "bullet" }],
// //     ["blockquote", "code-block"],
// //     ["link", "image"],
// //     ["clean"],
// //   ],
// // };

// // const AddRecipe = () => {
// //   const [title, setTitle] = useState("");
// //   const [imageFile, setImageFile] = useState(null);
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [content, setContent] = useState("");
// //   const [cookTime, setCookTime] = useState("");
// //   const [videoURL, setVideoURL] = useState("");
// //   const [servings, setServings] = useState("");
// //   const [tags, setTags] = useState("");

// //   const [course, setCourse] = useState({
// //     beverage: false,
// //     bread: false,
// //     breakfast_And_brunch: false,
// //     coffee: false,
// //     dessert: false,
// //     lunch_and_snack: false,
// //     main_dish: false,
// //   });

// //   const [cuisine, setCuisine] = useState({
// //     Indian: false,
// //     american: false,
// //     chinese: false,
// //     french: false,
// //     german: false,
// //     italian: false,
// //     mediterranean: false,
// //     thai: false,
// //   });

// //   const [skillLevel, setSkillLevel] = useState({
// //     easy: false,
// //     medium: false,
// //     hard: false,
// //   });

// //   const handleGroupedCheckboxChange = (group, setGroup) => (e) => {
// //     const { name, checked } = e.target;
// //     setGroup((prev) => ({
// //       ...prev,
// //       [name]: checked,
// //     }));
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImageFile(file);
// //       setImagePreview(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleSubmit = () => {
// //     const data = {
// //       title,
// //       content,
// //       cookTime,
// //       videoURL,
// //       servings,
// //       cuisine,
// //       skillLevel,
// //       tags,
// //       course,
// //       imageFile,
// //     };
// //     console.log("Submitted data:", data);
// //   };

// //   return (
// //     <div className="bg-yellow-400 min-h-screen">
// //       <div className="h-[350px] flex justify-center items-center relative bg-yellow-400 w-full">
// //      <img src={Img} className="h-[50%] absolute left-0 bottom-0 w-full" alt="" />
// //       <Heading name={"Add Recipe"} desc={"Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations."} />
// //     </div>
// //       <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow ">

        
// //         <h2 className="text-3xl font-bold mb-6 text-yellow-500">Create Recipe</h2>

// //         <div className="mb-4">
// //           <label className="block font-semibold mb-1">Title:</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="w-full border rounded px-4 py-2"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block font-semibold mb-1">Cook Time:</label>
// //           <input
// //             type="number"
// //             value={cookTime}
// //             onChange={(e) => setCookTime(e.target.value)}
// //             className="w-full border rounded px-4 py-2"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block font-semibold mb-1">Video URL:</label>
// //           <input
// //             type="text"
// //             value={videoURL}
// //             onChange={(e) => setVideoURL(e.target.value)}
// //             className="w-full border rounded px-4 py-2"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block font-semibold mb-1">Servings:</label>
// //           <input
// //             type="text"
// //             value={servings}
// //             onChange={(e) => setServings(e.target.value)}
// //             className="w-full border rounded px-4 py-2"
// //           />
// //         </div>

// //         {/* Course */}
// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2">Course:</label>
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
// //             {Object.keys(course).map((key) => (
// //               <label key={key} className="flex items-center gap-2">
// //                 <input
// //                   type="checkbox"
// //                   name={key}
// //                   checked={course[key]}
// //                   onChange={handleGroupedCheckboxChange(course, setCourse)}
// //                 />
// //                 {key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Cuisine */}
// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2">Cuisine:</label>
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
// //             {Object.keys(cuisine).map((key) => (
// //               <label key={key} className="flex items-center gap-2">
// //                 <input
// //                   type="checkbox"
// //                   name={key}
// //                   checked={cuisine[key]}
// //                   onChange={handleGroupedCheckboxChange(cuisine, setCuisine)}
// //                 />
// //                 {key.charAt(0).toUpperCase() + key.slice(1)}
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Skill Level */}
// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2">Skill Level:</label>
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
// //             {Object.keys(skillLevel).map((key) => (
// //               <label key={key} className="flex items-center gap-2">
// //                 <input
// //                   type="checkbox"
// //                   name={key}
// //                   checked={skillLevel[key]}
// //                   onChange={handleGroupedCheckboxChange(skillLevel, setSkillLevel)}
// //                 />
// //                 {key.charAt(0).toUpperCase() + key.slice(1)}
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mb-4">
// //           <label className="block font-semibold mb-1">Tags:</label>
// //           <input
// //             type="text"
// //             value={tags}
// //             onChange={(e) => setTags(e.target.value)}
// //             className="w-full border rounded px-4 py-2"
// //             placeholder="E.g., [Spicy, Quick, Healthy]"
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2">Instructions:</label>
// //           <ReactQuill
// //             theme="snow"
// //             value={content}
// //             onChange={setContent}
// //             modules={modules}
// //             style={{ height: "300px", marginBottom: "40px" }}
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label className="block font-semibold mb-2">Upload Image:</label>
// //           <input type="file" onChange={handleImageChange} />
// //           {imagePreview && (
// //             <img
// //               src={imagePreview}
// //               alt="Preview"
// //               className="mt-4 w-40 h-40 object-cover rounded shadow"
// //             />
// //           )}
// //         </div>

// //         <button
// //           onClick={handleSubmit}
// //           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //         >
// //           Submit Recipe
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddRecipe;


import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { useDispatch } from "react-redux";
import Heading from '../../utility/Heading';
import ButtonRed from '../../utility/ButtonRed'; // if you want, else remove
import Img from "../../assets/taxonomies-bg.svg";
import { createRecipe } from "../../redux/slices/AuthSlice"; // adjust path

const modules = {
  syntax: { highlight: (text) => hljs.highlightAuto(text).value },
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ font: [] }],
    [{ align: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const AddRecipe = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [content, setContent] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [servings, setServings] = useState("");
  const [tags, setTags] = useState("");

  const [course, setCourse] = useState({
    beverage: false,
    bread: false,
    breakfast_And_brunch: false,
    coffee: false,
    dessert: false,
    lunch_and_snack: false,
    main_dish: false,
  });

  const [cuisine, setCuisine] = useState({
    Indian: false,
    american: false,
    chinese: false,
    french: false,
    german: false,
    italian: false,
    mediterranean: false,
    thai: false,
  });

  const [skillLevel, setSkillLevel] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  // Dynamic Ingredients & Steps
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);

  const handleGroupedCheckboxChange = (group, setGroup) => (e) => {
    const { name, checked } = e.target;
    setGroup((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle dynamic ingredients input change
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  const addIngredient = () => setIngredients([...ingredients, ""]);
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Handle dynamic steps input change
  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };
  const addStep = () => setSteps([...steps, ""]);
  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Convert tags string to array by splitting on comma
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    // Collect selected keys from grouped checkboxes
    const selectedCourse = Object.keys(course).filter((key) => course[key]);
    const selectedCuisine = Object.keys(cuisine).filter((key) => cuisine[key]);
    const selectedSkillLevel = Object.keys(skillLevel).filter(
      (key) => skillLevel[key]
    );

    // Prepare FormData to send multipart/form-data including image
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    formData.append("cookTime", cookTime);
    formData.append("videoURL", videoURL);
    formData.append("servings", servings);
    formData.append("tags", JSON.stringify(tagsArray));
    formData.append("course", JSON.stringify(selectedCourse));
    formData.append("cuisine", JSON.stringify(selectedCuisine));
    formData.append("skillLevel", JSON.stringify(selectedSkillLevel));
    formData.append("ingredients", JSON.stringify(ingredients.filter(Boolean)));
    formData.append("steps", JSON.stringify(steps.filter(Boolean)));

    if (imageFile) formData.append("image", imageFile);

    // Dispatch redux thunk action for API call
    dispatch(createRecipe(formData));
  };

  return (
    <div className="bg-yellow-400 min-h-screen py-8">
      <div className="h-[350px] flex justify-center items-center relative bg-yellow-400 w-full mb-12">
        <img
          src={Img}
          className="h-[50%] absolute left-0 bottom-0 w-full"
          alt=""
        />
        <Heading
          name={"Add Recipe"}
          desc={
            "Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations."
          }
        />
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">Create Recipe</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Cook Time */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Cook Time (minutes):</label>
          <input
            type="number"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Video URL */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Video URL:</label>
          <input
            type="text"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Servings */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Servings:</label>
          <input
            type="text"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Tags (comma separated):</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border rounded px-4 py-2"
            placeholder="e.g., spicy, quick, healthy"
          />
        </div>

        {/* Grouped checkboxes: Course */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Course:</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(course).map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={course[key]}
                  onChange={handleGroupedCheckboxChange(course, setCourse)}
                />
                {key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </label>
            ))}
          </div>
        </div>

        {/* Grouped checkboxes: Cuisine */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Cuisine:</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(cuisine).map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={cuisine[key]}
                  onChange={handleGroupedCheckboxChange(cuisine, setCuisine)}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Grouped checkboxes: Skill Level */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Skill Level:</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.keys(skillLevel).map((key) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={key}
                  checked={skillLevel[key]}
                  onChange={handleGroupedCheckboxChange(skillLevel, setSkillLevel)}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Ingredients */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Ingredients:</label>
          {ingredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(idx, e.target.value)}
                className="w-full border rounded px-4 py-2"
                placeholder={`Ingredient #${idx + 1}`}
              />
              <button
                type="button"
                onClick={() => removeIngredient(idx)}
                disabled={ingredients.length === 1}
                className="bg-red-500 text-white px-3 rounded disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Ingredient
          </button>
        </div>

        {/* Dynamic Steps */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Steps:</label>
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={step}
                onChange={(e) => handleStepChange(idx, e.target.value)}
                className="w-full border rounded px-4 py-2"
                placeholder={`Step #${idx + 1}`}
              />
              <button
                type="button"
                onClick={() => removeStep(idx)}
                disabled={steps.length === 1}
                className="bg-red-500 text-white px-3 rounded disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Step
          </button>
        </div>

        {/* ReactQuill description (optional: keep or remove if using steps above) */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description:</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            style={{ height: "200px", marginBottom: "20px" }}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-40 h-40 object-cover rounded shadow"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Recipe
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;

