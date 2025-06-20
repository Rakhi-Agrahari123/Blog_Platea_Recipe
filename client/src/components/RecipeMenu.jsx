// import React from 'react'
// import Card from '../utility/Card'
// import {RecipeMenu_card} from '../assets/contant'
// import { IoStar } from 'react-icons/io5'

// const RecipeMenu = () => {
//   return (
//     <div>  {/* Hero Food-Card Section */}
//         <div className="pb-[60px] flex flex-col w-full">
//           <ul className="flex justify-center items-center gap-10 py-15">
//             <li className="text-[22px] font-[500] text-black">Latest Recipes</li>
//             <li className="text-[22px] font-[500] text-[#A1A1A1]">Most Popular Recipes</li>
//             <li className="text-[22px] font-[500] text-[#A1A1A1]">Fatest Recipes</li>
//             <li className="text-[22px] font-[500] text-[#A1A1A1]">Editor's Choice</li>
//           </ul>
//           <div className="flex justify-center items-center px-8">
          
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

//                      {RecipeMenu_card.map((item, index) => (
//                        <Card
//                          key={index}
//                          img={item.img}
//                          star= {`<Fastar />`}
//     //         [...Array(Math.floor(item.rating))].map((_, i) => (
//     //     <IoStar key={i} color="gold" />
//     //   ))
//     // }
          
//                          rating={item.rating}
//                          menu={item.menu}
//                          description={item.description}
//                          time={item.time}
//                          flag={item.flag}
//                          country={item.country}
//                          cheafImg={item.cheaf}
//                          cheafName={item.cheafName}
//                        />
//                      ))}
//                    </div>
         
            
//           </div>
//         </div></div>
//   )
// }

// export default RecipeMenu


import React from 'react';
import Card from '../utility/Card';
import { RecipeMenu_card } from '../assets/contant';
import { IoStar } from 'react-icons/io5';
import {useDispatch, useSelector} from 'react-redux'
import { fetchRecipe} from '../redux/slices/AuthSlice'
import { useEffect } from 'react';

const RecipeMenu = () => {

const dispatch = useDispatch();

const {recipes, loading, error }  = useSelector((state) => state.auth);

useEffect(() =>{
  dispatch(fetchRecipe());
},[dispatch]);

console.log("rec", recipes);


//   // ⭐ Function to generate JSX star icons based on rating
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     return (
//       <div className="flex">
//         {[...Array(fullStars)].map((_, i) => (
//           <IoStar key={i} color="gold" className="text-lg" />
//         ))}
//       </div>
//     );
//   };

  return (
    <div className="w-full py-[60px] ">
      {/* Tabs */}
      <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-10 py-5 px-2">
        <li className="text-[18px] md:text-[22px] font-medium text-black cursor-pointer">
          Latest Recipes
        </li>
        <li className="text-[18px] md:text-[22px] font-medium text-[#A1A1A1] cursor-pointer">
          Most Popular Recipes
        </li>
        <li className="text-[18px] md:text-[22px] font-medium text-[#A1A1A1] cursor-pointer">
          Fastest Recipes
        </li>
        <li className="text-[18px] md:text-[22px] font-medium text-[#A1A1A1] cursor-pointer">
          Editor's Choice
        </li>
      </ul>

      {/* Card Grid */}
      <div className="flex justify-center items-center px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 w-full">
       
       {recipes && recipes.length > 0 ? (
        
         recipes.map((item, index) => (
           <Card 
             key={item._id || index}
             img={item.image || item.thumbnail}
             // star={renderStars(item.rating)} // ✅ pass JSX, not string
             star={`⭐ `}
             rating={4.8}
             menu={item.title ||item.menu}
             description={item.description}
            //  time={item.time}
            //  flag={item.flag}
            //  country={item.country}
            //  cheafImg={item.cheaf }
            //  cheafName={item.cheafName}
           />
         )
         )) :(
          !loading && <p className='col-span-5 text-center fw-bold' >No recipes found.</p>
         
       )}
        </div>
      </div>
    </div>
  );
};

export default RecipeMenu;
