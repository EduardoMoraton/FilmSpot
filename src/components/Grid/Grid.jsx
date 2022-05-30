import Item from '../Item/Item'
import { API_KEYS } from '../../constants'
import {fetchItems, createUrl, createSearchUrl} from '../../functions/fetch-item'
import React, { useState, useEffect, useRef } from 'react';
import './Grid.css'

function Grid({type, search}){
    const listRef = useRef(null)
    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    useEffect(()=>{
        if(search != undefined)
        fetchItems(createSearchUrl(API_KEYS[0], search))
        .then((json)=>setItemList(json.results))
        else
        fetchItems(createUrl(type, API_KEYS[0], search))
        .then((json)=>setItemList(json.results)) 
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    console.log(itemList);
    
    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('Fetch more list items!');
        setIsFetching(true);

    }

    let actualPage = 2
    useEffect(() => {
        if (!isFetching) return;
        setTimeout(()=>{
            if(search != undefined)
            fetchItems(createSearchUrl(API_KEYS[0], search) + `&page=${actualPage}`)
            .then((json)=>setItemList(itemList.concat(json.results))) 
            else
            fetchItems(createUrl(type, API_KEYS[0], search) + `&page=${actualPage}`)
            .then((json)=>setItemList(itemList.concat(json.results)))
            setTimeout(()=>console.log("time"), 1000)
            console.log(createUrl(type, API_KEYS[0], search) + `&page=${actualPage}`);
            actualPage ++;
            setIsFetching(false)
        },1000)
      }, [isFetching]);

    return (
        <div className='grid-container'>
            <div className='grid-body'>
                <div className="grid">
                    {itemList && itemList.map((item, i)=>
                        <Item data={item} delay={i*20}key={item.id}/>
                    )}
                </div>
            </div>
            <div className="loading-more">
                {isFetching && <img src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'></img>}
            </div>
        </div>
        
    )
}

export default Grid;