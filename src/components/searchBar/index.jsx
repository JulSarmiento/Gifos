import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { getAutocomplete } from "../../services/giphi";
import TopicToSearch from "../../contexts/SearchContext";

function SearchBar(){
  // topics context
  const [topic, setTopic] = useContext(TopicToSearch);
  // This is the onchange values of the form
  const [suggestionTopic, setSuggestionTopic] = useState('');

  // This is the 
  const [autoComplete, setAutoComplete] = useState('');

  const inputRef = useRef('');

  /**
   * update suggestion every time the input field recives a letter
   * @param {event} e 
   */
  const handlerOnChange  = (e) => {
    setSuggestionTopic( e.target.value)
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

  /**
   * This useEffect set autocomplete object
   */
  useEffect( () => {

    getAutocomplete(suggestionTopic).then(({data}) => {
      setAutoComplete(data)
    })
  }, [suggestionTopic])


  console.log('suggestion topics', suggestionTopic)
  console.log('autocomplete', autoComplete)
  console.log('Topic to search' , topic)

  return (
    <div className="min-h-[50px] flex items-center align-middle h-auto flex-col">
      <form onSubmit={handleSubmit} className="flex items-center align-middle h-[40px] justify-between">
        <input 
          onChange={handlerOnChange} 
          ref={inputRef}
          className="outline-0 dark:bg-dark-gray dark:text-white dark:placeholder:text-white" 
          type="text" 
          id="topic" 
          name="topic" 
          placeholder={autoComplete.length === 0 ? "Busca GIFOS y mas" : autoComplete}/>
        <button type="submit"  className="flex items-center justify-center align-middle" ><span className="text-md text-purple material-symbols-outlined dark:text-white ">search</span></button> 
      </form>
      {autoComplete.length === 0? "" : 
        <ul className="border-t border-medium-gray w-full py-2" >
          {!autoComplete? "" : autoComplete.slice(1).map((item) => <li onClick={() => handlerAutocomplete(item.name)} className=" flex items-center flex-row gap-2 text-medium-gray py-1" key={item.name} ><span className="text-md text-medium-gray material-symbols-outlined dark:text-white ">search</span> {item.name}</li>)}
        </ul>
      }

    </div>
  )
}

export default SearchBar;

