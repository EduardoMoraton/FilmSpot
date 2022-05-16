import React from "react"

function Item({data}) {
    let imgSrc = "https://image.tmdb.org/t/p/w500"
    return (
        <div>
            <h1>{data.title ?? "test"}</h1>
            <p>{data.overview}</p>
            <img src={imgSrc+data.poster_path}></img>
        </div>
    )
}

export default Item;