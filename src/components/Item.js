import { useState, useEffect } from "react";
import ItemInfo from './ItemInfo';
import React from "react"

function Item({data}) {
    const [isOpen, setIsOpen] = useState(false)
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    return (
        <div onClick={()=> setIsOpen(!isOpen)} className="item">
            <img src={imgSrc+data.poster_path}></img>
            <ItemInfo open={isOpen} info={data} key={data.id}/>
        </div>
    )
}

export default Item;