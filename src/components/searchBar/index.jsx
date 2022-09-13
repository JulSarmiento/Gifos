import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { getAutocomplete, getSuggestions } from "../../services/giphi";
import TopicToSearch from "../../contexts/SearchContext";

function SearchBar(){
  const [topic, setTopic] = useContext(TopicToSearch);
  const [suggestionTopic, setSuggestionTopic] = useState('');
  const [suggestion, setSuggestions] = useState([]);
  const [autoComplete, setAutoComplete] = useState('');

  const inputRef = useRef('');

  const handlerOnChange  = (e) => {
    setSuggestionTopic( e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTopic(inputRef.current.value)
  }

  useEffect( () => {

    getAutocomplete(suggestionTopic).then(({data}) => {
      setAutoComplete(data)
    })
  }, [suggestionTopic])

  useEffect( () => {

    getSuggestions(suggestionTopic).then(({data}) => {
      setSuggestions(data)
    })
  }, [suggestionTopic])

  console.log('autocomplete', autoComplete)
  console.log('suggestions', suggestion)
  console.log('Topic to search' , topic)

  return (
    <div>
      <div className="flex items-center justify-between">
        <input 
          onChange={handlerOnChange} 
          ref={inputRef}
          className="outline-0 dark:bg-dark-gray dark:text-white dark:placeholder:text-white" 
          type="text" 
          id="topic" 
          name="topic" 
          placeholder="Busca GIFOS y ms"/>
        <button type="submit" onClick={handleSubmit} className="flex items-center justify-center align-middle" ><span className="text-md text-purple material-symbols-outlined dark:text-white ">search</span></button> 
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default SearchBar;

