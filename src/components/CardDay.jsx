import React from "react";

const CardDay = ({ day, img, temp }) => {
  function fecha(day) {
    day = new Date(fecha);
  }

  return (
      <div className="text-center  relative">
        <div className="bg-white p-3 rounded-xl">
          <img className="m-1 " src={img} alt={temp?.text} />
          <p className="text-3xl">{temp? temp:'20'}°</p>
        </div>
        <p className="font-medium ">{"Sunday"}</p>
      </div>
  );
};

export default CardDay;
