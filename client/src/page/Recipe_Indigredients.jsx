// import img from "../assets/recipe/recipe-2-630x785.jpg";
// import { GiCurvyKnife } from "react-icons/gi";
// import Heading from "../utility/Heading";
// import avatar from "../assets/avatar/avatar-200x200.jpg";
// import Img from "../assets/taxonomies-bg.svg";
// import React, { useEffect, useState } from "react";

// const Recipe = () => {
//   const [recipe, setRecipe] = useState([]);

//   const token = localStorage.getItem("token");
//   const fetchRecipes = async () => {
//     try {
//       const url = "http://localhost:5000/api/recipe";

//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       console.log("Fetched recipes:", data);
//       setRecipe(data);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   return (
//     // Recipe page section
//     <section className="h-auto flex flex-col justify-center items-center w-full py-20 bg-[#F4F4F4]">
//     <div className="h-[100vh] flex flex-col justify-center items-center w-full bg-[#F4F4F4]">
//       <div className="flex justify-center items-center w-[800px] h-[850px] my-[40px] border-1 rounded-[30px] border-[#DDDDDD] bg-red-400 relative font-(family-name:--font-family)">
//         <img
//           src={img}
//           className="absolute z-2 left-[-12%] rounded-[30px] w-[400px] min-h-[80%]"
//           alt=""
//         />
//         {/* {image} */}

//         <div className="flex flex-col items-start bg-amber-300 w-[400px] min-h-[80%] border-0 rounded-[30px] border-[#A1A1A1] absolute z-1 top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 py-10">
//           <div className="mb-10 text-2xl text-center px-[30px] bg-white w-full">
//             <h2 className="text-[36px] font-[700]">
//               {/* {ingredients} */}
//               Ingredient
//             </h2>
//           </div>

//           <ul className="flex flex-col items-center px-10 text-[18px] font-[500]">
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               pasta (like penne)
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               mushrooms
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               garlic
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               cream (or heavy cream)
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               butter or olive oil
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               parmesan cheese
//             </li>
//             <li className="flex justify-center items-center gap-2 pb-3">
//               <GiCurvyKnife className="text-[olive] text-xl" />
//               seasonings like salt and pepper
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="common-padding w-full h-[450px] relative bg-white">
//         <img
//           src={Img}
//           className="h-[50%] absolute left-0 bottom-[0px] w-full"
//           alt=""
//         />
// </div>

// </div>
//         <div className="flex justify-center items-center gap-8 p-6 top-[20px]">
//           <div className="w-[50%] px-5 pb-10 mb-5 ">
//             {/* {description} */}
//             <Heading
//               name={"With a Delicious Description"}
//               desc={
//                 "Savor the perfect comfort dish — penne pasta tossed in a rich, velvety cream sauce infused with garlic and butter, generously loaded with sautéed mushrooms. Finished with a sprinkle of parmesan cheese and balanced with a touch of salt and pepper, this dish delivers a creamy, savory flavor in every bite."
//               }
//             />
//             <p className="font-[500] uppercase">
//               {/* {steps} */}
//               Boil, Cook, mix with sauce
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-4 px-5 border-l-2 border-[#DDDDDD]">
//             <h4 className="text-xl font-[800] w-[80%]">
//               {/* {titile} */}
//               Creamy Garlic Mushroom Penne Pasta
//             </h4>
//             <p className="font-[500] uppercase">
//               {/* {tags}  */}
//               Italian
//             </p>

//             <div className="flex justify-center items-center gap-3 ">
//               <img
//                 src={avatar}
//                 className="h-[50px] w-[50px] rounded-[50%]"
//                 alt=""
//               />

//               <span className="flex flex-col items-start font-[700]">
//                 <h6 className="text-[18px]">
//                   {/* {author} */}
//                   Olivia Thompson
//                 </h6>
//                 <p className="text-[#A1A1A1]">Recipe Author</p>
//               </span>
//             </div>
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// };

// export default Recipe;




import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "../redux/slices/AuthSlice";
import { GiCurvyKnife } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Heading from "../utility/Heading";
import defaultAvatar from "../assets/avatar/avatar-200x200.jpg";
import defaultBg from "../assets/taxonomies-bg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Recipe = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.auth);
  const [liked, setLiked] = useState({});

  useEffect(() => {
    dispatch(fetchRecipe());
    AOS.init({ duration: 1000 });
  }, [dispatch]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedRecipes");
    if (storedLikes) setLiked(JSON.parse(storedLikes));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedRecipes", JSON.stringify(liked));
  }, [liked]);

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F4F4F4]">
        <div className="w-12 h-12 border-4 border-rose-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Error: {error}
      </p>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-600">No recipes found.</p>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[#282222] px-4 py-10 flex flex-col items-center gap-16">
      {recipes.map((recipe, idx) => {
        const imageURL = recipe.image?.includes("http")
          ? recipe.image
          : `http://localhost:3000/${recipe.image}`;

        const avatarURL = recipe.author?.avatar?.includes("http")
          ? recipe.author.avatar
          : `http://localhost:3000/${recipe.author?.avatar || defaultAvatar}`;

        return (
          <div
            key={recipe._id || idx}
            className="flex flex-col items-center w-full max-w-[1000px]"
            data-aos="fade-up"
          >
            {/* Recipe Card */}
            <div className="flex flex-col md:flex-row justify-center items-center w-full border border-[#DDDDDD] rounded-[30px] bg-red-400/50 backdrop-blur-lg relative overflow-hidden shadow-2xl px-6 py-10 hover:scale-[1.01] transition duration-300">
              {/* Heart Icon */}
              <button
                onClick={() => toggleLike(recipe._id)}
                className="absolute top-4 right-4 z-10 text-2xl text-white bg-black/30 p-2 rounded-full hover:scale-110 transition"
              >
                {liked[recipe._id] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>

              {/* Image */}
              <img
                src={imageURL || defaultBg}
                alt={recipe.title}
                className="w-full md:w-[400px] h-auto object-cover rounded-[30px] hover:scale-105 transition duration-500"
                data-aos="zoom-in-right"
              />

              {/* Ingredients */}
              <div
                className="bg-amber-300 w-full h-full md:w-[400px] p-8 rounded-[30px] md:ml-6 mt-6 md:mt-0 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                data-aos="fade-up"
              >
                <div className="text-center py-4 rounded-md mb-6 shadow-lg bg-white">
                  <h1 className="text-2xl text-red-950 font-bold capitalize">
                    {recipe.title}
                  </h1>
                  <h2 className="text-2xl text-green-600 capitalize font-bold">
                    Ingredients
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700 h-auto md:text-md">
                  {recipe.ingredients?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-lg text-wrap font-medium"
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                    >
                      <GiCurvyKnife className="text-olive-700 text-xl" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Description + Author */}
            <div
              className="mt-12 w-full bg-white rounded-[20px] shadow-md p-8 relative overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={defaultBg}
                alt=""
                className="absolute bottom-0 left-0 w-full h-[50%] object-cover opacity-10"
              />
              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                {/* Left: Description and Steps */}
                <div className="md:w-1/2">
                  <Heading
                    name="With a Delicious Description"
                    desc={recipe.description || "No description available."}
                  />
                  <h3 className="mt-4 font-semibold uppercase text-gray-800 mb-2">
                    Steps
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {recipe.steps?.map((step, i) => (
                      <li
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={`${i * 100}`}
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Title, Tags, Author */}
                <div className="md:w-1/2 border-t-2 md:border-t-0 md:border-l-2 border-gray-300 pt-4 md:pt-0 md:pl-6">
                  <h4 className="text-xl font-bold mb-2">{recipe.title}</h4>
                  <p className="uppercase font-medium text-sm text-rose-600 mb-4">
                    {recipe.tags?.join(", ") || "No tags"}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarURL}
                      alt={recipe.author?.name || "Author"}
                      className="h-[50px] w-[50px] rounded-full object-cover"
                    />
                    <div>
                      <h6 className="text-lg font-semibold">
                        {recipe.author?.name || "Unknown Author"}
                      </h6>
                      <p className="text-sm text-gray-500">Recipe Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Recipe;
