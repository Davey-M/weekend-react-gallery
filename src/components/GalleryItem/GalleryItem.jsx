import { useState } from "react";

function GalleryItem({ image, updateImage }) {

    const handleClickLike = () => {
        updateImage(image.id);
    }

    return (
        <>
            <div>
                <img src={ image.path } alt="" width="200" />
                <p>{ image.description }</p>
            </div>
            <div>
                <p>{ image.likes } likes</p>
                <button onClick={handleClickLike}>Like</button>
            </div>
        </>
    )
}

export default GalleryItem;