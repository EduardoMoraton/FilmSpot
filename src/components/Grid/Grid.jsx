import Item from '../Item/Item'
import { API_KEYS } from '../../constants'
import {fetchItems, createUrl, createSearchUrl} from '../../functions/fetch-item'
import React, { useState, useEffect, useRef } from 'react';
import './Grid.css'

function Grid({type, search}){
    const listRef = useRef(null)
    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    useEffect(()=>{
        if(search != undefined)
        fetchItems(createSearchUrl(API_KEYS[0], search))
        .then((json)=>setItemList(json.results))
        else
        fetchItems(createUrl(type, API_KEYS[0], search))
        .then((json)=>setItemList(json.results)) 
    }, [])

    return (
        <div className='grid-container'>
            <div className='grid-body'>
                <div className="grid">
                    {itemList && itemList.map((item, i)=>
                        <Item data={item} delay={i*20}key={item.id}/>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Grid;