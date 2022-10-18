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

// search 
export const getSearch = async (term, offset = 0) => {
  const res = await fetch(`${Config.URL}gifs/search?api_key=${Config.APIKEY}&q=${term}&limit=12&offset=${offset}`);
  const json = await res.json();
  return json
}

//  Upload
export const postGifo = async (form) => {
  const res = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${Config.APIKEY}&username=JulSarmiento&file=${form}`, {
    method: "POST",
    body: form,
  })
  const json = await res.json();
  return json
}