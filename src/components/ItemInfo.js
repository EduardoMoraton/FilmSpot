import ReactDOM from 'react';
import bounceInUp from 'react-transition-group'

const MODAL_STYLES = {
    borderRadious: "34px",
    top: "30%",
    color: "FFF",
    width: "30rem",
    margin: "0 auto",
    position: 'fixed',
    backgroundColor: '#282a36',
    zIndex: 1000,
    padding: "1rem",
}

const OUT_MODAL_STYLES = {
    color: "FFF",
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
    width: "100%",
    height: "100%",
    transition: "3s",
    display: "flex",
    justifyContent: "center",
}


export default function ItemInfo({open, info}){
    if(!open) return null
    return (
        <>
        <div style={OUT_MODAL_STYLES} className="item-info animate__animated animate__fadeIn animate__faster">
            <div style={MODAL_STYLES} className="animate__animated animate__fadeInUp animate__faster">
                <div className="btn-close-modal" onClick={open=false}>CLOSE</div>
                <h1 clasNmae="animate__animated animate__fadeInUp animate__slow">{info.title}</h1>
                <p  clasNmae="animate__animated animate__fadeInUp animate__slower">{info.overview}</p>
            </div>
        </div>
        </>
    )
}