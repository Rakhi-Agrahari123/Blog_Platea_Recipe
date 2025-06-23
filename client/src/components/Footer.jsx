// import React from 'react';
// import Heading from '../utility/Heading';
// import { FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";
// import LOGO from "../assets/svgImg/Logo.svg";
// import ButtonCommon from '../utility/ButtonCommon';

// const Footer = () => {
//   return (
//     <footer className="w-full font-sans bg-gray-900 text-gray-800">
//       {/* Tag Section */}
//       <div className="bg-gray-900 text-white px-4 py-16">
//         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
//             <div className="flex flex-col justify-center items-center pb-[50px]">
//       <h1 className="text-[42px] text-yellow-400 font-extrabold  pb-2">Explore Popular Tags</h1>
//       <p className={`text-gray-500`}>From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click.</p>
//     </div>

//           <div className="flex flex-wrap justify-center items-center gap-3 mt-8 text-sm font-semibold">
//             {[
//               "Comfort Food", "Dairy-Free", "Desserts", "Gluten-Free", "Healthy",
//               "High-Protein", "Holiday", "Kid-Friendly", "Low-Carb", "Meal Prep",
//               "Meat", "One-Pot", "Quick Meals", "Spicy", "Vegetarian", "Video Recipe"
//             ].map((tag, index) => (
//               <ButtonCommon key={index} name={tag} style="rounded-full uppercase" />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Social + Links */}
//       <div className="px-4 py-12">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          
//           {/* Social Icons */}
//           <ul className="flex gap-4">
//             {[FaInstagram, FaXTwitter, FaYoutube, FaPinterestP].map((Icon, i) => (
//               <li key={i} className="h-11 w-11 flex items-center justify-center bg-gray-200  rounded-full  hover:bg-red-500 hover:text-white transition">
//                 <Icon className="text-lg scale-110 hover:scale-115 " />
//               </li>
//             ))}
//           </ul>

//           {/* Footer Navigation */}
//           <ul className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm font-semibold text-gray-700 ">
//             {[
//               "All Recipes", "Video Recipes", "A-Z Recipes", 
//               "Refund Policy", "Terms and Conditions", "Contact Us"
//             ].map((link, index) => (
//               <li key={index} className="text-yellow-400 hover:text-red-500 cursor-pointer transition">
//                 {link}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm ">
//           <p className="mb-2 max-w-2xl mx-auto px-4">
//             Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.
//           </p>
//           <p className="mb-4">© 2025 Platea. All rights reserved. Designed by Gloria Themes.</p>
//           <img src={LOGO} alt="Footer Logo" className="h-6 mx-auto" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../utility/Heading';
import { FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";
import LOGO from "../assets/svgImg/Logo.svg";
import ButtonCommon from '../utility/ButtonCommon';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false});
  }, []);

  return (
    <footer className="w-full font-sans bg-gray-900 text-gray-800"
    fade-up data-aos="fade-up" data-aos-duration="1000" data-aos-once="false"
    >
      {/* Tag Section */}
      <div className="bg-gray-900 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          <div
            className="flex flex-col justify-center items-center pb-[50px]"
            data-aos="fade-up"
          >
            <h1 className="text-[42px] text-yellow-400 font-extrabold pb-2">
              Explore Popular Tags
            </h1>
            <p className="text-gray-500">
              From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click.
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center items-center gap-3 mt-8 text-sm font-semibold"
            data-aos="zoom-in-up"
          >
            {[
              "Comfort Food", "Dairy-Free", "Desserts", "Gluten-Free", "Healthy",
              "High-Protein", "Holiday", "Kid-Friendly", "Low-Carb", "Meal Prep",
              "Meat", "One-Pot", "Quick Meals", "Spicy", "Vegetarian", "Video Recipe"
            ].map((tag, index) => (
              <ButtonCommon key={index} name={tag} style="rounded-full uppercase" />
            ))}
          </div>
        </div>
      </div>

      {/* Social + Links */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Social Icons */}
          <ul className="flex gap-4" data-aos="fade-right">
            {[FaInstagram, FaXTwitter, FaYoutube, FaPinterestP].map((Icon, i) => (
              <li
                key={i}
                className="h-11 w-11 flex items-center justify-center bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                <Icon className="text-lg scale-110 hover:scale-115" />
              </li>
            ))}
          </ul>

          {/* Footer Navigation */}
          <ul
            className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm font-semibold text-gray-700"
            data-aos="fade-left"
          >
            {[
              "All Recipes", "Video Recipes", "A-Z Recipes",
              "Refund Policy", "Terms and Conditions", "Contact Us"
            ].map((link, index) => (
              <li key={index} className="text-yellow-400 hover:text-red-500 cursor-pointer transition">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm" data-aos="fade-up">
          <p className="mb-2 max-w-2xl mx-auto px-4">
            Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.
          </p>
          <p className="mb-4">© 2025 Platea. All rights reserved. Designed by <span className="text-yellow-400 font-medium">Rakhi</span>.</p>
          <img src={LOGO} alt="Footer Logo" className="h-6 mx-auto" data-aos="zoom-in" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
