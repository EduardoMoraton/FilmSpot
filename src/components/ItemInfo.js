import { ReactDOM } from "react";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}


export default function ItemInfo({open, data}){
    if(!open) return null
    return ReactDOM.createPortal(
        <>
        <div style={MODAL_STYLES}>
            <div className="btn-close-modal" onClick={open=false}>CLOSE</div>
            <h1>marcos</h1>
        </div>
        </>,
        Document.getElemetById("portal")
    )
}