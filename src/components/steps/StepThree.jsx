import React from "react";
import loading from "../../assets/imgs/loader.svg"
 


function StepThree () {

  return (
    <div className="z-1000">
      <div className="h-[320px] w-[480px] grid place-content-center bg-clear-purple">
        <img className="animate-spin" src={loading} alt="loading" />
      </div>
    </div>
  )
}

export default StepThree;