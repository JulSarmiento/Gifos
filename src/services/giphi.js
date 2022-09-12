import Config from "../config";

// trending topics
export const getTrends = async () => {
  const res = await fetch(`${Config.URL}trending/searches?api_key=${Config.APIKEY}`);
  const json = await res.json();
  return json
}

// trending gifos
export const getTrendyGifos = async () => {
  const res = await fetch(`${Config.URL}gifs/trending?api_key=${Config.APIKEY}&limit=9`);
  const json = await res.json();
  return json
}

// autoComplete 
export const getAutocomplete = async (tag) => {
  const res = await fetch(`${Config.URL}gifs/search/tags?api_key=${Config.APIKEY}&q=${tag}`);
  const json = await res.json();
  return json
}

// search suggestions 
export const getSuggestions = async (term) => {
  const res = await fetch(`${Config.URL}tags/related/${term}?api_key=${Config.APIKEY}`);
  const json = await res.json();
  return json
}
