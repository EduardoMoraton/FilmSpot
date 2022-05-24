import Item from '../Item/Item'
import { API_CALLS, API_KEYS } from '../../constants'
import {fetchItems, createUrl} from '../../functions/fetch-item'
import React, { useState, useEffect, useRef } from 'react';

function List({type}){
    const listRef = useRef(null)
    const scroll = (scrollOffset) => {
        listRef.current.scrollLeft += scrollOffset;
      };

    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    useEffect(()=>{
        fetchItems(createUrl(type, API_KEYS[1]))
        .then((json)=>setItemList(json.results)) // Aqui rellenamos la lista de peliculas desde el fetch 
    }, [])

    return (
        <div className='list-container'>
                <div className='move-arrows'>
                    <div onClick={()=>scroll(-1171)} className="right">
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className='arrow'
                    >
                    <path
                        d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                        fill="currentColor"
                    />
                    </svg>
                    </div>
                    <div onClick={()=>scroll(1171)} className="left">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className='arrow'
                        >
                        <path
                            d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                            fill="currentColor"
                        />
                        </svg>
                    </div>
                </div>
            <div className='list-body'>
                <div className="list" ref={listRef}>
                    {itemList && itemList.map((item)=>
                        <Item data={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default List;