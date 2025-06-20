// // import React from 'react';
// // import HERO from "../assets/search-hero-2.jpg";
// // import FoodSafe from "../assets/svgImg/foodSafe.svg";
// // import { FaMagnifyingGlass } from 'react-icons/fa6';
// // import ButtonRed from '../utility/ButtonRed';

// // const Hero = () => {
// //   return (
// //     <section className="font-sans">
// //       {/* Hero Search Section */}
// //       <div className="mt-[5px] px-[12px] relative w-full h-full">
// //         <img src={HERO} className="rounded-2xl w-full" alt="Hero" />

// //         <div className="absolute top-0 left-[8%] sm:left-[10%] md:left-[12%] lg:left-[14%] my-[120px] sm:my-[150px] md:my-[180px] lg:my-[200px] flex flex-col justify-start h-full w-[90%] md:w-[680px] ">
          
// //           <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] leading-tight mb-4 font-semibold w-full">
// //             You don't know how to make the dish you have in mind?
// //           </h3>

// //           <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed mb-6 text-gray-700">
// //             Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.
// //           </p>

// //           <div className="relative w-full flex items-center p-[6px] mb-4 rounded-[16px] bg-white shadow-md">
// //             <img src={FoodSafe} className="p-[12px] w-10" alt="Food Safe" />

// //             <input
// //               type="text"
// //               className="p-[12px_16px] w-full text-sm md:text-base outline-none"
// //               placeholder="Find what do you want to cook today"
// //             />

// //             <ButtonRed
// //               name={<FaMagnifyingGlass />}
// //               style={'p-[14px] md:p-[18px] text-[18px] md:text-[22px] rounded-[12px]'}
// //             />
// //           </div>

// //           <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#464646]">
// //             Type a keyword and discover recipes that turn your cravings into delicious reality!
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from 'react';
// import HERO from "../assets/search-hero-2.jpg";
// import FoodSafe from "../assets/svgImg/foodSafe.svg";
// import { FaMagnifyingGlass } from 'react-icons/fa6';
// import ButtonRed from '../utility/ButtonRed';

// const Hero = () => {
//   return (
//     <section className="font-sans py-8 px-4">
//       {/* Hero Section with responsive flex */}
//       <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-up">
        
//         {/* Left Image */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={HERO}
//             className="rounded-2xl w-full h-auto object-cover"
//             alt="Hero"
//           />
//         </div>

//         {/* Right Text Content */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center animate-slide-in">
//           <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 font-semibold">
//             You don't know how to make the dish you have in mind?
//           </h3>

//           <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
//             Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.
//           </p>

//           {/* Search Bar */}
//           <div className="flex items-center p-2 rounded-xl bg-white shadow-md mb-4">
//             <img src={FoodSafe} className="w-10 p-2" alt="Food Safe" />
//             <input
//               type="text"
//               className="w-full px-3 py-2 text-sm md:text-base outline-none"
//               placeholder="Find what do you want to cook today"
//             />
//             <ButtonRed
//               name={<FaMagnifyingGlass />}
//               style={'p-3 md:p-4 text-xl rounded-lg'}
//             />
//           </div>

//           <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#464646]">
//             Type a keyword and discover recipes that turn your cravings into delicious reality!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import HERO from "../assets/search-hero-2.jpg";
import FoodSafe from "../assets/svgImg/foodSafe.svg";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import ButtonRed from '../utility/ButtonRed';

const Hero = () => {
  return (
    <section
      className="font-sans bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 md:px-16 min-h-[80vh] flex flex-col md:flex-row items-center justify-start animate-fade-up"
      style={{
        backgroundImage: `url(${HERO})`,
      }}
    >
      <div className=" bg-opacity-80 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-xl shadow-lg max-w-2xl animate-slide-in">

        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 font-semibold">
          You don't know how to make the dish you have in mind?
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
          Feed your imagination and spark your creativity. From cravings to creations, let your ideas flourish and uncover the perfect recipe waiting to be discovered.
        </p>

        {/* Search Bar */}
        <div className="flex items-center p-2 rounded-xl bg-white shadow-md mb-4">
          <img src={FoodSafe} className="w-10 p-2" alt="Food Safe" />

          <input
            type="text"
            className="w-full px-3 py-2 text-sm md:text-base outline-none"
            placeholder="Find what do you want to cook today"
          />

          <ButtonRed
            name={<FaMagnifyingGlass />}
            style={'p-3 md:p-4 text-xl rounded-lg'}
          />
        </div>

        <p className="text-xs sm:text-sm md:text-base text-[#464646]">
          Type a keyword and discover recipes that turn your cravings into delicious reality!
        </p>
      </div>
    </section>
  );
};

export default Hero;
