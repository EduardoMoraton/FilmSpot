import {useState} from "react";
import RaitingRadio from "../RatingRadios/RatingRadio";
import {ItemInfo} from '../ItemInfo/ItemInfo';
import React from "react"
import './Item.css'

function Item({data}) {
    const [isOpen, setIsOpen] = useState(false)
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    return (
        <div onClick={()=> setIsOpen(!isOpen)} className="item">
            <div className="item-content">
                <img src={imgSrc+data.poster_path}></img>
                <RaitingRadio rating={data.vote_average}/>
                <div className="item-overlay">
                        <p>Placeholder</p>
                </div>
            </div>
            <ItemInfo open={isOpen} info={data} key={data.id}/>
        </div>
    )
}

export default Item;