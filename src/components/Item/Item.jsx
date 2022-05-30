import {useState, useEffect} from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RaitingRadio from "../RatingRadios/RatingRadio";
import {ItemInfo} from '../ItemInfo/ItemInfo';
import React from "react"
import './Item.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

function Item({data, delay}) {
    const [isOpen, setIsOpen] = useState(false)
    const [isShown, setIsShown] = useState(false)
    
    const PlaceHolder = () => <img src={"https://lasallealfaro.es/wp-content/uploads/2021/01/placeholder-1.png"}></img> 
    useEffect(() => {
        setTimeout(() => {
          setIsShown(true);
        }, delay);
      },[delay]);
    
    
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    let imgSrcLow = "https://image.tmdb.org/t/p/w92"
    
    return isShown ? (
        <div onClick={()=> setIsOpen(!isOpen)} className="item animate__animated animate__backInRight animate__faster">
            <div className="item-content">
                <div className="item-img">
                <LazyLoadImage 
                    className="pa-image"
                    src={typeof data.poster_path === 'undefined' ? 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg' : imgSrc+data.poster_path}
                    placeholderSrc={typeof data.poster_path === 'undefined' ? 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg' : imgSrcLow+data.poster_path}
                    effect="blur">
                    
                    </LazyLoadImage>
                </div>
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