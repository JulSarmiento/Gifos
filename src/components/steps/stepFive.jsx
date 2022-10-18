import React from "react";
import check from "../../assets/imgs/check.svg"


function StepFive () {

  return (
    <div className="z-1000">
      <div className="h-[320px] w-[480px] grid place-content-center bg-clear-purple">
        <img className="animate-spin" src={check} alt="loading" />
      </div>
    </div>
  )
}

export default StepFive;