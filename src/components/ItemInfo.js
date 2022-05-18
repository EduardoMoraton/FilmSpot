import ReactDOM from 'react';

const MODAL_STYLES = {
    color: "FFF",
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 1000,
    transition: "4s"
}

const OUT_MODAL_STYLES = {
    color: "FFF",
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1000,
    width: "100%",
    height: "100%",
    transition: "3s"
}


export default function ItemInfo({open, info}){
    console.log(info)
    if(!open) return null
    return (
        <>
        <div style={OUT_MODAL_STYLES} className="item-info">
            <div style={MODAL_STYLES}>
                <div className="btn-close-modal" onClick={open=false}>CLOSE</div>
                <h1>{info.title}</h1>
                <p>{info.overview}</p>
            </div>
        </div>
        </>
    )
}