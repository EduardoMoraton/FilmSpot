import ReactDOM from 'react-dom';
import './ItemInfo.css'
import '../RatingRadios/RatingRadio.jsx'
import RaitingRadio from '../RatingRadios/RatingRadio.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// https://animate.style/

export function ItemInfo({open, info}){
    let imgSrc = "https://image.tmdb.org/t/p/original"
    let imgSrcLow = "https://image.tmdb.org/t/p/w500"
    if(!open) return null
    return (ReactDOM.createPortal(
        <div className="item-info-out animate__animated animate__fadeIn animate__faster">
            <div className="item-info-in animate__animated animate__backInDown animate__faster">
                .
                <div className="btn-close-modal" onClick={open=false}>CLOSE</div>
                <RaitingRadio rating={info.vote_average} />

                <LazyLoadImage 
                    src={imgSrc+info.backdrop_path}
                    placeholderSrc={imgSrcLow+info.backdrop_path}
                    effect="blur">
                </LazyLoadImage>
                <div className='info-text'>
                    <h1 clasNmae="animate__animated animate__fadeInUp animate__slow">{info.title ?? info.name}</h1>
                    <p  clasNmae="animate__animated animate__fadeInUp animate__slower">{info.overview}</p>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    ))
}