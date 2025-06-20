import React from 'react';

const ButtonCommon = ({style, name, onClick}) => {
  return (
    <button className={`normal-case p-[10px_20px] border-0 rounded-[40px] ${style} text-black text-[14px] hover:bg-[red] hover:text-white cursor-pointer bg-[#FAFAFA]`} onClick={onClick}>{name}</button>
  )
}

export default ButtonCommon;
