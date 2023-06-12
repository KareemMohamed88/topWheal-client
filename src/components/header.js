import React from "react";
import "../styles/header.css";

function header() {
  return (
    <div>
      <div className="header h-80 flex justify-center items-center text-center bg-slate-200">
        <div className="">
          <h2 className="text-3xl mb-5">Topwheal</h2>
          <p className="mb-2">We are the dectionry about your car</p>
          <button className="py-2 p-4 bg-blue-400 text-white font-bold rounded-md" type="button">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default header;
