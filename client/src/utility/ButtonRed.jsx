import React from 'react';

const ButtonRed = ({name, style, tag}) => {
  return (
    <button className={`w-fit p-[13px_22px] text-white bg-[red] font-[700] text-[14px] rounded-[10px] ${style} ${tag} hover:bg-black hover:text-white cursor-pointer`}>{name}</button>
  )
}

export default ButtonRed;