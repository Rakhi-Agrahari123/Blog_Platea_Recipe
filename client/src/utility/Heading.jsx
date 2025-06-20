import React from 'react';

const Heading = ({name, desc, style}) => {
  return (
    <div className="flex flex-col justify-center items-center pb-[50px]">
      <h1 className="text-[42px] text-gray-700 font-[500] pb-2">{name}</h1>
      <p className={`text-[#5d5d5d] ${style}`}>{desc}</p>
    </div>
  )
}

export default Heading;