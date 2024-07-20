import React, { useState } from "react";

const Card = ({ nombre, tipo, direccion, descripcion, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" rounded overflow-hidden shadow-md  shadow-[#B2F3BB] w-full h-fit cursor-pointer" onClick={onClick}>
      <div className="px-6 py-4">
        <div className="font-bold text-sm  text-slate-500">{nombre}</div>
        <div className="font-bold text-xs mb-2 text-slate-300">{tipo}</div>
        <p className="text-gray-700 text-xs">
          {isExpanded ? descripcion : `${descripcion.slice(0, maxLength)}...`}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-500 hover:underline text-xs"
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
        <p className="font-bold text-slate-700 text-xs mt-2">{direccion}</p>
      </div>
    </div>
  );
};

export default Card;
