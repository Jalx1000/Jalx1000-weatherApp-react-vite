import React from "react";

const MoreInfo = ({descripcion,valor}) => {
  return (
    <div className="flex font-medium">
      <div>
        <div className="bg-yellow-200 text-yellow-500 w-20 rounded-lg">{valor}</div>
        <p className="">{descripcion}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
