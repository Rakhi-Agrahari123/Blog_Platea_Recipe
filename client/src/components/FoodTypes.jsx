import React from 'react';
import HERO1 from "../assets/section-bg-02.jpg";
import HERO2 from "../assets/section-bg-03.jpg";
import STAR from "../assets/svgImg/Star.svg";
import img1 from "../assets/svgImg/pizzaslice.svg";
import img2 from "../assets/svgImg/dessert.svg";
import img3 from "../assets/svgImg/drink.svg";
import img4 from "../assets/svgImg/healthy.svg";
import img5 from "../assets/svgImg/meat.svg";
import img6 from "../assets/svgImg/salad.svg";
import img7 from "../assets/svgImg/seafood.svg";
import img8 from "../assets/svgImg/soup.svg";
import img9 from "../assets/svgImg/vegan.svg";
import ButtonRed from '../utility/ButtonRed';


const FoodTypes = () => {
  return (
    // Food Types Section
    <section className="flex flex-col justify-center items-center common-padding font-(family-name:--font-family)">
        <div className="flex justify-center items-center w-full gap-8">
            <div className="relative w-[634px] h-[660px]">
                <img src={HERO1} className="rounded-2xl w-full h-full object-cover" alt="" />

                <div className="absolute top-0 pl-8 pt-7 my-[10px] flex flex-col justify-start h-full w-[450px] text-white">

                    <div className="flex justify-start items-center gap-3 font-[400] pb-10">
                        <div className="flex justify-center items-center gap-3 p-[5px_10px] rounded-2xl bg-[#fefce8]">
                            <img src={STAR} alt="" />
                            <span className="font-[500] text-black text-[14px]">5.0</span>
                        </div>
                        <div className="text-[14px]">score from 10.000 rating</div>
                    </div>

                    <h2 className="text-[36px] leading-[1.1] pb-10 font-[600] w-full">Learn from the best and create culinary magic at home.</h2>
        
                    <p className="text-[16px] leading-[1.7] w-fit mb-[56px]">Get inspired by expert tips and techniques to perfect your skills. Explore recipes that help you master new dishes, adding confidence and creativity to your home cooking experience.</p>
        
                    <ButtonRed name={"View Recipes"}/>
                </div>
            </div>
            
            <div className="relative w-[634px] h-[660px]">
                <img src={HERO2} className="rounded-2xl w-full h-full object-cover" alt="" />

                <div className="absolute top-0 pl-8 pt-7 my-[10px] flex flex-col justify-start h-full w-[450px]">

                    <div className="flex justify-start items-center gap-3 font-[400] pb-10">
                        <div className="flex justify-center items-center gap-3 p-[5px_10px] rounded-2xl bg-[#fefce8]">
                            <img src={STAR} alt="" />
                            <span className="font-[500] text-[14px]">5.0</span>
                        </div>
                        <div className="text-[14px]">score from 10.000 rating</div>
                    </div>

                    <h2 className="text-[36px] leading-[1.1] pb-10 font-[600] w-full">Add flavor, flair, and a touch of creativity to your meals.</h2>
        
                    <p className="text-[16px] leading-[1.7] w-fit mb-[56px]">Elevate your dishes with bold flavors and creative twists. From vibrant ingredients to expert techniques, discover recipes that transform your everyday cooking into something extraordinary.</p>
        
                    <ButtonRed name={"View Recipes"}/>
                </div>
            </div>
        </div>

        <div className="pt-[40px] w-full pb-[60px]">
            <ul className="flex justify-center items-center gap-3">
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img1} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Appetizers</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">2 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img2} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Desserts</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">4 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img3} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Drinks</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">3 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img4} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Healthy</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">3 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img5} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Meat</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">5 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img6} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Salads</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">3 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img7} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Seafood</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">4 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img8} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Soups</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">4 Recipes</span>
               </li>
               <li className="w-[134px] flex flex-col justify-center items-center border-1 border-[#DDDDDD] rounded-xl p-[20px]">
                <img src={img9} className="h-[38px] w-[38px]" alt="" />
                <span className="text-[18px] mt-[20px] font-[500]">Vegan</span>
                <span className="text-[#A1A1A1] text-[13px] mt-1.5">4 Recipes</span>
               </li>
            </ul>
        </div>
    </section>
  )
}

export default FoodTypes;