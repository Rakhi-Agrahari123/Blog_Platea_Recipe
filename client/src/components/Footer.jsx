// import React from 'react';

// import Heading from '../utility/Heading';
// import { FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";
// import LOGO from "../assets/svgImg/Logo.svg";
// import ButtonCommon from '../utility/ButtonCommon';

// const Footer = () => {
//   return (
//     <footer className="w-full font-(family-name:--font-family)">
//         <div className="bg-gray-900 common-padding">
//           <div className="py-[80px] flex flex-col justify-center items-center mx-[250px]">
//             <Heading  name={"Explore Popular Tags"} desc={"From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."} />

//             <div className="flex justify-center items-center flex-wrap gap-3 text-[14px] font-[600] ">
//               <ButtonCommon name={"Comfort Food"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Dairy-Free"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Desserts"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Gluten-Free"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Healthy"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"High-Protein"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Holiday"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Kid-Friendly"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Low-Carb"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Meal Prep"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Meat"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"One-Pot"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Quick Meals"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Spicy"} style={' rounded-[40px] uppercase'}/>

//               <ButtonCommon name={"Vegetarian"} style={' rounded-[40px] uppercase'}/>
              
//               <ButtonCommon name={"Video Recipe"} style={' rounded-[40px] uppercase'}/>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center common-padding">
//           <div className="flex justify-between items-center py-[40px] gap-[28px_56px]">
//             <ul className="flex justify-start items-center relative ">
//               <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
//                 <FaInstagram className="absolute top-[16px] left-[18px] text-[14px]"/>
//               </li>
//               <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
//                 <FaXTwitter className="absolute top-[16px] left-[70px] text-[14px]"/>
//               </li>
//               <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
//                 <FaYoutube className="absolute top-[16px] right-[70px] text-[14px]"/>
//               </li>
//               <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
//                 <FaPinterestP className="absolute top-[16px] right-[18px] text-[14px]"/>
//               </li>
//             </ul>

//             <ul className="flex justify-end items-center gap-[28px_56px] font-[600]">
//               <li className="hover:text-[red] cursor-pointer">All Recipes</li>
//               <li className="hover:text-[red] cursor-pointer">Video Recipes</li>
//               <li className="hover:text-[red] cursor-pointer">A-Z Recipes</li>
//               <li className="hover:text-[red] cursor-pointer">Refund Policy</li>
//               <li className="hover:text-[red] cursor-pointer">Terms and Conditions</li>
//               <li className="hover:text-[red] cursor-pointer">Contact Us</li>
//             </ul>
//           </div>
//           <div className="py-[25px] border-t-1 border-[#DDDDDD] w-fit">
//             <div className="common-padding flex flex-col items-center justify-center">
//               <p className="pb-[18px] text-[15px] text-[#767676]">Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.</p>
//               <p className="pb-[18px] text-[14px]">© 2025 Platea. All rights reserved. Designed by Gloria Themes.</p>
//               <div className="h-[25px]">
//                 <img src={LOGO} className="w-full h-[24px]" alt="Footer_logo" />
//               </div>
//             </div>
//           </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer;


import React from 'react';
import Heading from '../utility/Heading';
import { FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";
import LOGO from "../assets/svgImg/Logo.svg";
import ButtonCommon from '../utility/ButtonCommon';

const Footer = () => {
  return (
    <footer className="w-full font-sans bg-gray-900 text-gray-800">
      {/* Tag Section */}
      <div className="bg-gray-900 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
            <div className="flex flex-col justify-center items-center pb-[50px]">
      <h1 className="text-[42px] text-yellow-400 font-extrabold  pb-2">Explore Popular Tags</h1>
      <p className={`text-gray-500`}>From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click.</p>
    </div>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-8 text-sm font-semibold">
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
          <ul className="flex gap-4">
            {[FaInstagram, FaXTwitter, FaYoutube, FaPinterestP].map((Icon, i) => (
              <li key={i} className="h-11 w-11 flex items-center justify-center bg-gray-200  rounded-full  hover:bg-red-500 hover:text-white transition">
                <Icon className="text-lg scale-110 hover:scale-115 " />
              </li>
            ))}
          </ul>

          {/* Footer Navigation */}
          <ul className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm font-semibold text-gray-700 ">
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
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm ">
          <p className="mb-2 max-w-2xl mx-auto px-4">
            Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.
          </p>
          <p className="mb-4">© 2025 Platea. All rights reserved. Designed by Gloria Themes.</p>
          <img src={LOGO} alt="Footer Logo" className="h-6 mx-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
