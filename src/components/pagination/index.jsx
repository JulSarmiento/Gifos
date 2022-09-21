import React from "react";

function Pagination({ onAddNumber, pagination }) {
  const numArray = [1, 2, 3, 4, 5]

  return (
    <div className=" w-full h-[35px] flex justify-center align-middle gap-4 items-center ">

      {
        pagination.offset === 0 ?
          ''
          :
          <span
            onClick={() => onAddNumber(pagination.offset === 0 ? 0 : pagination.offset - 12)}
            className="material-symbols-outlined">
            arrow_back_ios
          </span>
      }

      <ul className="flex flex justify-center align-middle gap-4">
        {numArray.map(num => (
          <li
            className="text-medium-gray font-roboto text-md w-[32px] h-[32px0] grid place-content-center font-regular hover:border rounded-full hover:bg-purple hover:text-[#fff] active:bg-purple active:text-white  dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
            onClick={() => onAddNumber(pagination.count * (num - 1))}
            key={num}>
            {num} 
          </li>))}
      </ul>

      {
        pagination.offset === 48 ?
          ''
          :
          <span
            onClick={() => onAddNumber(pagination.offset + 12)}
            className="material-symbols-outlined">
            arrow_forward_ios
          </span>
      }

    </div>
  )


}

export default Pagination;