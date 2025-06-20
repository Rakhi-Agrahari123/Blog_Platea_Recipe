// // // import React from 'react';
// // // import HERO2 from "../assets/section-bg.jpg";
// // // import STAR from "../assets/svgImg/Star.svg";

// // // const Rating_FoodView = () => {
// // //   return (
// // //     // Rateing & View Food Section
// // //     <div className="common-padding">
// // //         <div className="relative flex justify-center items-center w-full pb-[60px]">
// // //           <img src={HERO2} className="rounded-2xl" alt="" />

// // //           <div className="absolute top-0 right-[15%] my-[100px] flex flex-col justify-start h-full w-[600px]">

// // //               <div className="flex justify-start items-center gap-3 font-[500] mb-5">
// // //               <div className="flex justify-center items-center text-[14px] gap-2 p-[5px_10px] rounded-2xl bg-[#fefce8]">
// // //                   <img src={STAR} alt="" />
// // //                   <span>5.0</span>
// // //               </div>
// // //               <div className="">score from 10.000 rating</div>
// // //               </div>

// // //               <h3 className="text-[52px] leading-[1.1] mb-6 font-[600] w-full">Discover fresh and easy recipes to inspire your meals every day.</h3>

// // //               <p className="text-[16px] leading-[1.7] mb-15">Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!</p>

// // //               <button className="w-fit p-[13px_22px] bg-white font-[500] text-[14px] rounded-[10px] hover:bg-[red] hover:text-white cursor-pointer">View Recipes</button>
// // //           </div>
// // //         </div>
// // //     </div>
// // //   )
// // // }

// // // export default Rating_FoodView;

// // import React from 'react';
// // import HERO2 from "../assets/section-bg.jpg";
// // import STAR from "../assets/svgImg/Star.svg";

// // const Rating_FoodView = () => {
// //   return (
// //     <div className="px-4 py-12 md:py-20 lg:py-24">
// //       <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto">
        
// //         {/* Background Image */}
// //         <img
// //           src={HERO2}
// //           alt="Hero background"
// //           className="w-full lg:w-3/5 rounded-2xl object-cover"
// //         />

// //         {/* Overlay Text Content */}
// //         <div className="absolute lg:static top-0 lg:right-0 mt-8 lg:mt-0 bg-white/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-xl lg:rounded-none shadow-md lg:shadow-none w-full lg:w-2/5 max-w-lg">
// //           <div className="flex items-center gap-3 mb-5 text-sm font-medium">
// //             <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-2xl">
// //               <img src={STAR} alt="Star" className="w-4 h-4" />
// //               <span>5.0</span>
// //             </div>
// //             <div className="text-gray-700">score from 10,000 ratings</div>
// //           </div>

// //           <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
// //             Discover fresh and easy recipes to inspire your meals every day.
// //           </h3>

// //           <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
// //             Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!
// //           </p>

// //           <button className="px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
// //             View Recipes
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Rating_FoodView;


// import React from 'react';
// import HERO2 from "../assets/section-bg.jpg";
// import STAR from "../assets/svgImg/Star.svg";

// const Rating_FoodView = () => {
//   return (
//     <div className="px-4 py-12 md:py-20 lg:py-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

//         {/* Image */}
//         <div>
//           <img
//             src={HERO2}
//             alt="Hero background"
//             className="w-full h-auto rounded-2xl object-cover"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="space-y-6">
//           {/* Rating Badge */}
//           <div className="flex items-center gap-3 text-sm font-medium">
//             <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-2xl">
//               <img src={STAR} alt="Star" className="w-4 h-4" />
//               <span>5.0</span>
//             </div>
//             <div className="text-gray-700">score from 10,000 ratings</div>
//           </div>

//           {/* Heading */}
//           <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
//             Discover fresh and easy recipes to inspire your meals every day.
//           </h3>

//           {/* Paragraph */}
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//             Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!
//           </p>

//           {/* Button */}
//           <button className="px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
//             View Recipes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rating_FoodView;


import React from 'react';
import HERO2 from "../assets/section-bg.jpg";
import STAR from "../assets/svgImg/Star.svg";

const Rating_FoodView = () => {
  return (
    <div className="px-4 py-12 md:py-20 lg:py-24">
      {/* Wrapper */}
      <div className="relative grid grid-cols-1 lg:grid-cols-1 max-w-7xl mx-auto">

        {/* Image */}
        <div className="w-full">
          <img
            src={HERO2}
            alt="Hero background"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:top-[10%] lg:right-[10%] lg:my-[100px] lg:w-[600px]">
          <div className="space-y-6 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md">

            {/* Rating */}
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-2xl">
                <img src={STAR} alt="Star" className="w-4 h-4" />
                <span>5.0</span>
              </div>
              <span className="text-gray-700">score from 10,000 ratings</span>
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Discover fresh and easy recipes to inspire your meals every day.
            </h3>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!
            </p>

            {/* Button */}
            <button className="px-6 py-3 bg-white text-black font-medium text-sm rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
              View Recipes
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating_FoodView;
