import React, { useContext, useRef, useState } from "react";
import { getAutocomplete } from "../../services/giphi";
import TopicToSearch from "../../contexts/SearchContext";

function SearchBar(){
  // topics context
  const [topic, setTopic] = useContext(TopicToSearch);

  // This is the autocomplete state
  const [autoComplete, setAutoComplete] = useState([]);

  const inputRef = useRef('');

  const handleClose = () => {
    setAutoComplete([]);
    setTopic(inputRef.current.value = null)
  }

  /**
   * update suggestion every time the input field recives a letter
   * @param {event} e 
   */
  const handlerOnChange  = (e) => {
    const element = e.target;
    if(!element.value) {
      return setAutoComplete([]);
    };

    getAutocomplete(element.value).then(({data}) => {
      setAutoComplete(data)
    })
  };

  /**
   * Set the hole word to search after an enter or a submit
   * @param {event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setTopic(inputRef.current.value)
  }

  const handlerAutocomplete = (item) => {
    setTopic(item)
  }

  console.log('autocomplete', autoComplete)
  console.log('Topic to search' , topic)

  return (
    <div className="min-h-[50px] w-full px-[23px] flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="h-[40px] w-full p-2 ">

        <div className="flex items-center justify-between align-middle ">
          <div className="flex gap-2">
            {
              autoComplete.length !== 0 ?
              <button type="submit"  className="flex items-center justify-center align-middle" ><span className="text-md text-purple material-symbols-outlined dark:text-white ">search</span></button>
              :
              ''
            }
            <input 
              onChange={handlerOnChange} 
              ref={inputRef}
              className="outline-0 dark:bg-dark-gray dark:text-white dark:placeholder:text-white" 
              type="text" 
              id="topic" 
              name="topic" 
              placeholder="Busca GIFOS y mas" />

            </div>

            {
              autoComplete.length !== 0 ?
                <button onClick={handleClose} className="flex items-center justify-center align-middle justify-self-end" ><span className="text-md text-purple material-symbols-outlined dark:text-white ">close</span></button>
                :
                <button type="submit"  className="flex items-center justify-center align-middle justify-self-end" ><span className="text-md text-purple material-symbols-outlined dark:text-white ">search</span></button>
            }
        </div>
        
      </form>
      {autoComplete.length === 0? "" : 
        <ul className="border-t border-medium-gray w-full py-2 " >
          {!autoComplete? "" : autoComplete.slice(1).map((item) => <li onClick={() => handlerAutocomplete(item.name)} className=" flex items-center flex-row gap-2 text-medium-gray py-1" key={item.name} ><span className="text-md text-medium-gray material-symbols-outlined dark:text-white ">search</span> {item.name}</li>)}
        </ul>
      }

    </div>
  )
}

export default SearchBar;

