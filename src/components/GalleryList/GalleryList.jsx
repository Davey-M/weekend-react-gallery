import { useState, useEffect, useRef } from 'react';

import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage }) {

    const imageContainer = useRef();
    const [ width, setWidth ] = useState(Math.floor(window.innerWidth * .7));

    const imageHeights = images.map(image => {
        return 0
    })

    const rows = [300]

    const setImageHeights = () => {
        for (let i = 0; i < images.length; i++) {

        }
    }

    console.log({ width, imageHeights });
    return (
        <>
            <div
                className="image-container"
                ref={imageContainer}
            >
                {images.map((image, index) => {
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} height={rows[imageHeights[index]]} />
                })}
            </div>
        </>
    )
}

export default GalleryList;