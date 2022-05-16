export const fetchItems = (url, key) => {
    return fetch(url+key)
    .then((res)=>res.json())
}
