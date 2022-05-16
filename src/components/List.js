import Item from './Item'
import React, { useState, useRef, useEffect } from 'react';

const List = (props) => {
    const [ItemList, getItemList] = useState([])

    useEffect(()=>{
        fetchItems(API_CALLS.trending)
    })

    return (
        <div className="list">
            
        </div>
    )
}

export default List;