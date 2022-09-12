import React, { useState } from "react";
import { useEffect } from "react";
import { getAutocomplete, getSuggestions } from "../../services/giphi";

function SearchBar(){
  const [topic, setTopic] = useState();
  const [suggestion, setSuggestions] = useState([]);
  const [autoComplete, setAutoComplete] = useState('');

  const handlerOnChange  = (e) => {
    setTopic( e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect( () => {

    getAutocomplete(topic).then(({data}) => {
      setAutoComplete(data)
    })
  }, [topic])

  useEffect( () => {

    getSuggestions(topic).then(({data}) => {
      setSuggestions(data)
    })
  }, [topic])

  console.log('autocomplete', autoComplete)
  console.log('suggestions', suggestion)
  console.log(topic)

  return (
    <div>
      <div>
        <input 
          onChange={handlerOnChange} 
          className="outline-0 dark:bg-dark-gray" 
          type="text" 
          id="topic" 
          name="topic" 
          placeholder="Busca GIFOS y ms"/>
        <button type="submit" onClick={handleSubmit} ><span className="text-purple material-symbols-outlined dark:text-white ">search</span></button> 
      </div>
      <div>

      </div>
    </div>
  )
}

export default SearchBar;

