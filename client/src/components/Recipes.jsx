// import React from 'react';
// import Heading from '../utility/Heading';
// import Card from '../utility/Card';
// import ButtonCommon from '../utility/ButtonCommon';

// const Recipes = () => {
//   return (
//     // Recipes Section
//     <section className="common-padding">
//       <div className="pb-[80px]">
//         <Heading name={"New Recipes"} desc={"Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts."}/>
//         <div className="flex flex-col items-center">
//           <div className="flex justify-center items-center flex-wrap gap-3 pb-[30px] text-[14px] font-[700] ">
//             <ButtonCommon name={"All Recipes"} style={'p-[13px_22px] normal-case text-white bg-[red]'}/>
            
//             <ButtonCommon name={"Appetizers"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
//             <ButtonCommon name={"Main Dishes"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
//             <ButtonCommon name={"Desserts"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
//             <ButtonCommon name={"Drinks"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
//             <ButtonCommon name={"Healthy"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
            
//             <ButtonCommon name={"Other Recipes"} style={'p-[13px_22px] normal-case border-1 border-[#DDDDDD] bg-[white]'}/>
//           </div>
//           <div className="grid grid-cols-4  pb-[28px]">

//             {/* <Card /> */}
           
//           </div>
//           <div className="flex justify-center items-center w-full">
//             {/* <Card />
//             <Card />
//             <Card />
//             <Card /> */}
//           </div>
//         </div>

//         <div className="flex justify-center items-center pt-[80px]">
//           <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:left-[200px]"></span>
          
//           <div className="px-5">
//             <ButtonCommon name={"Explore All Recipes"} style={'text-xl bg-white  border-2 border-gray-200 rounded-lg font-[600]'}/>
//           </div>
          
//           <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:right-[200px]"></span>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Recipes;

import React from 'react';
import Heading from '../utility/Heading';
import Card from '../utility/Card';
import ButtonCommon from '../utility/ButtonCommon';
import { RecipeCard } from '../assets/contant';
import { motion } from 'framer-motion';


const Recipes = () => {
  return (
    <section className="common-padding">
      <div className="pb-[80px]">
        <Heading
          name="New Recipes"
          desc="Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts."
        />

        {/* Buttons */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center flex-wrap gap-3 pb-8 text-sm font-bold">
            <ButtonCommon name="All Recipes" style="p-[13px_22px] bg-red-600 text-white" />
            <ButtonCommon name="Appetizers" style="p-[13px_22px] bg-white border border-gray-300" />
            <ButtonCommon name="Main Dishes" style="p-[13px_22px] bg-white border border-gray-300" />
            <ButtonCommon name="Desserts" style="p-[13px_22px] bg-white border border-gray-300" />
            <ButtonCommon name="Drinks" style="p-[13px_22px] bg-white border border-gray-300" />
            <ButtonCommon name="Healthy" style="p-[13px_22px] bg-white border border-gray-300" />
            <ButtonCommon name="Other Recipes" style="p-[13px_22px] bg-white border border-gray-300" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* {RecipeCard.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                star={item.star}
                rating={item.rating}
                menu={item.menu}
                description={item.description}
                time={item.time}
                flag={item.flag}
                country={item.country}
                cheafImg={item.cheaf}
                cheafName={item.cheafName}
              />
            ))} */}

            {RecipeCard.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <Card
      img={item.img}
      star={item.star}
      rating={item.rating}
      menu={item.menu}
      description={item.description}
      time={item.time}
      flag={item.flag}
      country={item.country}
      cheafImg={item.cheaf}
      cheafName={item.cheafName}
    />
  </motion.div>
))}

          </div>
        </div>

        {/* Divider and Button */}
        <div className="flex justify-center items-center pt-[80px]">
          <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:left-[200px]"></span>

          <div className="px-5">
            <ButtonCommon name="Explore All Recipes" style="text-xl bg-white border-2 border-gray-200 rounded-lg font-semibold" />
          </div>

          <span className="relative bg-[#DDDDDD] after:absolute after:content-[''] after:w-[560px] after:h-[1px] after:bg-[#DDDDDD] after:right-[200px]"></span>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
