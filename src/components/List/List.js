import Item from '../Item/Item'
import { API_CALLS, API_KEYS } from '../../constants'
import {fetchItems} from '../../functions/fetch-item'
import React, { useState, useEffect } from 'react';

const List = (props) => {
    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    console.log(API_CALLS.trendingMovies, API_KEYS[0])

    useEffect(()=>{
        fetchItems(API_CALLS.trendingMovies, API_KEYS[0])
        .then((json)=>setItemList(json.results)) // Aqui rellenamos la lista de peliculas desde el fetch 
    }, [])
    
    return (
        <div className="list">
            {itemList && itemList.map((item)=>
                <Item data={item} key={item.id}/>
            )}
        </div>
    )
}

export default List;