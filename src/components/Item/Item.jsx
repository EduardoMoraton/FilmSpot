import {useState, useEffect} from "react";
import RaitingRadio from "../RatingRadios/RatingRadio";
import {ItemInfo} from '../ItemInfo/ItemInfo';
import React from "react"
import './Item.css'

function Item({data, delay}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        console.log(delay);
        setTimeout(() => {
          setIsShown(true);
        }, delay);
      },[delay]);
    
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    return isShown ? (
        <div onClick={()=> setIsOpen(!isOpen)} className="item animate__animated animate__backInRight animate__faster">
            <div className="item-content">
                <img src={imgSrc+data.poster_path ?? '../../../public/noImage.png'}></img>
                <RaitingRadio rating={data.vote_average}/>
                <div className="item-overlay">
                    <div class="play-btn">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                        <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                        <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                        </svg> 
                        
                    </a>
                    </div>
                </div>
            </div>
            <ItemInfo open={isOpen} info={data} key={data.id}/>
        </div>
    ) : null
}

export default Item;