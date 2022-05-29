import React, {useEffect, useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_CALLS, API_KEYS } from '../../constants'
import {fetchItems, createUrl} from '../../functions/fetch-item'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Carousel.css'

let rndIds = [Math.floor(Math.random() * 20),Math.floor(Math.random() * 20),Math.floor(Math.random() * 20)]

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const PlaceHolder = () => <img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ecd5fab-be8d-4409-bd84-4a3d205b9ec8/daehq7e-48b7f14a-14ff-4082-9e7c-aee710c9bbfd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVlY2Q1ZmFiLWJlOGQtNDQwOS1iZDg0LTRhM2QyMDViOWVjOFwvZGFlaHE3ZS00OGI3ZjE0YS0xNGZmLTQwODItOWU3Yy1hZWU3MTBjOWJiZmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GW_7jlunpf-1g4Dy3ppLR414Q_YBZ6MxF9QAVlbV4Ck"}></img> 
    const [itemList, setItemList] = useState([]) // Hook donde tendremos la lista de peliculas (20 items)
    useEffect(()=>{
        fetchItems(createUrl(API_CALLS.trendingMovies, API_KEYS[0]))
        .then((json)=>setItemList(json.results)) // Aqui rellenamos la lista de peliculas desde el fetch 
    }, [])
    let imgSrc = "https://image.tmdb.org/t/p/original/"
    let imgSrcLow = "https://image.tmdb.org/t/p/w92/"

    console.log(rndIds);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <LazyLoadImage 
            className="c-image"
                    src={itemList[rndIds[0]] != null ? imgSrc+itemList[rndIds[0]].backdrop_path : "null"}
                    placeholderSrc={itemList[rndIds[0]] != null ? imgSrcLow+itemList[rndIds[0]].backdrop_path : "null"}
                    effect="blur">
                    
            </LazyLoadImage>

          <Carousel.Caption>
            <h3>{itemList[rndIds[0]] != null ? itemList[rndIds[0]].title : "null"}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <LazyLoadImage 
            className="c-image"
            src={itemList[rndIds[1]] != null ? imgSrc+itemList[rndIds[1]].backdrop_path : "null"}
            placeholderSrc={itemList[rndIds[1]] != null ? imgSrcLow+itemList[rndIds[1]].backdrop_path : "null"}
            effect="blur">
            </LazyLoadImage>
  
          <Carousel.Caption>
          <h3>{itemList[rndIds[1]] != null ? itemList[rndIds[1]].title : "null"}</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <LazyLoadImage 
            className="c-image"
            src={itemList[rndIds[2]] != null ? imgSrc+itemList[rndIds[2]].backdrop_path : "null"}
            placeholderSrc={itemList[rndIds[2]] != null ? imgSrcLow+itemList[rndIds[2]].backdrop_path : "null"}
            effect="blur">
                    
            </LazyLoadImage>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default ControlledCarousel;