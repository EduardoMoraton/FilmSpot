export const fetchItems = (url) => {
    return fetch(url)
    .then((res)=>res.json())
}

export const createUrl = (url, key) => url+key;

export const createSearchUrl = (key, query) => `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-EN&query=${query}&page=1&include_adult=false`;