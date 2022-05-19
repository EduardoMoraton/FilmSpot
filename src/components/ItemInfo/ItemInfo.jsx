import ReactDOM from 'react-dom';
import './ItemInfo.css'
import '../RatingRadios/RatingRadio.jsx'
import RaitingRadio from '../RatingRadios/RatingRadio.jsx';

// https://animate.style/

export function ItemInfo({open, info}){
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    if(!open) return null
    return (ReactDOM.createPortal(
        <div className="item-info-out animate__animated animate__fadeIn animate__faster">
            <div className="item-info-in animate__animated animate__fadeInUp animate__faster">
                <div className="btn-close-modal" onClick={open=false}>CLOSE</div>
                <img src={imgSrc+info.poster_path}></img>
                <div className='info-text'>
                    <RaitingRadio rating={info.vote_average} />
                    <h1 clasNmae="animate__animated animate__fadeInUp animate__slow">{info.title ?? info.name}</h1>
                    <p  clasNmae="animate__animated animate__fadeInUp animate__slower">{info.overview}</p>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    ))
}