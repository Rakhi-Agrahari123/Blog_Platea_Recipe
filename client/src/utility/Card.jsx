import React from "react";
import Heart from "../assets/svgImg/Heart.svg";
import Bookmark from "../assets/svgImg/Bookmark.svg";
import Watch from "../assets/svgImg/Watch.svg";
import { FaStar } from "react-icons/fa6";


const Card = ({ img, rating, menu, description, time, flag, country, cheafImg, cheafName }) => {
  return (
    <div className="flex flex-col items-center px-2">
      
      {/* Image and icons */}
      <div className="relative w-[328px] h-[428px] pb-[12px]">
        <img src={img} className="w-80 h-full rounded-xl object-cover shadow-lg" alt={menu} />

        <ul className="w-full pt-2 flex justify-between items-start absolute top-[0.5rem] left-[1rem] right-[1rem]">
          <li className="flex items-center text-[14px] p-[5px_10px] rounded-3xl bg-white">
            {/* <img src={star} alt="star" /> */}
           <FaStar className="text-amber-400"/>
            <span className="pl-2 font-[500]">{rating}</span>
          </li>

          <li className="flex flex-col gap-4 pr-7">
            <img
              src={Heart}
              className="h-[35px] w-[35px] bg-white p-[6px] rounded-full"
              alt="Heart"
            />
            <span className="p-[8px] bg-white rounded-full">
              <img src={Bookmark} className="h-[20px] w-[20px]" alt="Bookmark" />
            </span>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex flex-col w-[328px]">
        <h6 className="text-[red] font-[500] pt-[5px] text-[16px]">{menu}</h6>
        <p className="text-[22px] font-[600] pt-[5px]">{description}</p>

        <ul className="flex justify-start items-center gap-5 pt-[15px] text-[#A1A1A1] text-[14px]">
          <li className="flex items-center gap-2">
            <img src={Watch} alt="Time" />
            <span>{time}</span>
          </li>

          <li className="flex items-center gap-2">
            <img src={flag} className="h-[17px]" alt="Country Flag" />
            <span>{country}</span>
          </li>

          <li className="flex items-center gap-2">
            <img src={cheafImg} className="h-[17px]" alt="Chef" />
            <span>{cheafName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
