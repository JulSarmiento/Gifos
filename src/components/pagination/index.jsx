import React from "react";

function Pagination({ onAddNumber}) {
  const numArray = [1,2,3,4,5]

  console.log(numArray)

  return (
    <div className=" w-full h-[35px] flex justify-center align-middle gap-4 items-center ">

      <ul className="flex flex justify-center align-middle gap-4">
        {numArray.map(num => <li className="text-medium-gray font-roboto text-md w-[32px] h-[32px0] grid place-content-center font-regular hover:border rounded-full hover:bg-purple hover:text-[#fff] active:bg-purple active:text-white  dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black " onClick={() => onAddNumber(num - 1)} key={num}>{num}</li>)}
      </ul>

    </div>
  )


}

export default Pagination