import Item from '../Item/Item'
import { API_KEYS } from '../../constants'
import {fetchItems} from '../../functions/fetch-item'
import React, { useState, useEffect, useRef } from 'react';
import './Grid.css'

function Grid({type}){
    const listRef = useRef(null)


    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    useEffect(()=>{
        fetchItems(type, API_KEYS[0])
        .then((json)=>setItemList(json.results)) // Aqui rellenamos la lista de peliculas desde el fetch 
    }, [])

    return (
        <div className='grid-container'>
            <div className='grid-body'>
                <div className="grid">
                    {itemList && itemList.map((item)=>
                        <Item data={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Grid;