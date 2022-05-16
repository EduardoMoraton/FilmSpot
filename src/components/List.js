import Item from './Item'
import Consts from '../constants'
import functs from '../functions/fetch-item'
import React, { useState, useRef, useEffect } from 'react';

const List = (props) => {
    const [ItemList, getItemList] = useState([])

    useEffect(()=>{
        functs.fetchItems(Consts.API_CALLS.trending+Consts.API_KEY[0])
    })

    return (
        <div className="list">
            
        </div>
    )
}

export default List;