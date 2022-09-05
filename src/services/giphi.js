import Config from "../config";

export const getTrends = async () => {
  const res = await fetch(`${Config.URL}trending/searches?api_key=${Config.APIKEY}`);
  const json = await res.json();
  return json
}

export const getTrendyGifos = async () => {
  const res = await fetch(`${Config.URL}gifs/trending?api_key=${Config.APIKEY}&limit=9`);
  const json = await res.json();
  return json
}


