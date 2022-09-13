import { useState } from "react";
import TopicToSearch from "../contexts/SearchContext";

export default function TopicToSearchProvider({children}){
  const [topic, setTopic] = useState('');

  return(
    <TopicToSearch.Provider value={[topic, setTopic]}>
      {children}
    </TopicToSearch.Provider>
  )
}