import { useState, useEffect } from "react";
import ItemInfo from './ItemInfo';
import React from "react"

function Item({data}) {
    const [isOpen, setIsOpen] = useState(false)
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    return (
        <div onClick={()=> setIsOpen(!isOpen)}>
            <h1>{data.title ?? "Undefined"}</h1>
            <p>{data.overview}</p>
            <img src={imgSrc+data.poster_path}></img>
            <ItemInfo open={isOpen}/>
        </div>
    )
}

export default Item;