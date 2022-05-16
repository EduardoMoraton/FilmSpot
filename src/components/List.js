import Item from './Item'
import consts, { API_CALLS, API_KEYS } from '../constants'
import functs, {fetchItems} from '../functions/fetch-item'
import React, { useState, useRef, useEffect } from 'react';

const List = (props) => {
    const [itemList, setItemList] = useState([])
    console.log(API_CALLS.trendingMovies, API_KEYS[0])
    useEffect(()=>{
        fetchItems(API_CALLS.trendingMovies, API_KEYS[0])
        .then((json)=>setItemList(json.results))
    }, [])
    
    return (
        <div className="list">
            {itemList && itemList.map((item)=><Item data={item} key={item.id}/>)}
        </div>
    )
}

export default List;