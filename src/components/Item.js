function Item(props) {
    let imgSrc = "../../public/logo192.png"
    let title = "Loading..."
    let desc = "Loading..."
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{desc}</p>
            <img src={imgSrc}></img>
        </div>
    )
}

export default Item;