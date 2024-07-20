import React, { useState } from "react";

const Card = ({ nombre, tipo, direccion, descripcion }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; 

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" rounded overflow-hidden shadow-md  shadow-[#B2F3BB] w-full h-fit">
      <div className="px-6 py-4">
        <div className="font-bold text-xl  text-[#41d655]">{nombre}</div>
        <div className="font-bold text-sm mb-2 text-[#8ad494]">{tipo}</div>
        <p className="text-gray-700 text-base">
          {isExpanded ? descripcion : `${descripcion.slice(0, maxLength)}...`}
        </p>
        <button 
        onClick={handleToggle} 
        className="text-blue-500 hover:underline text-sm"
      >
        {isExpanded ? 'Leer menos' : 'Leer más'}
      </button>
        <p className="font-bold text-slate-700 text-sm mt-2">{direccion}</p>
      </div>
    </div>
  );
};

export default Card;
