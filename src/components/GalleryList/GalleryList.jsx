import { useState, useEffect, useRef } from "react";

import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage }) {

    const imageContainer = useRef();
    const [ width, setWidth ] = useState(Math.floor(window.innerWidth * .7));

    // const width = Math.floor(window.innerWidth * .7);

    const setImageHeights = () => {

        const containerWidth = imageContainer.current.clientWidth;

        for (let i = 0 ; i < images.length; i++) {
            console.log(images[i]);

            const image = images[i];

            let scaleFactor = 300 / image['image-height'];
            let imageWidth = image['image-width'] * scaleFactor;
            let imageHeight = image['image-height'] * scaleFactor;

            console.log({
                imageWidth, imageHeight
            });
        }
    }

    useEffect(() => {
        setImageHeights();
    });

    // window.addEventListener('resize', setImageHeights);

    // useEffect(() => {
    //     setImageHeights();
    // }, [width])

    // console.log({ width, imageHeights });
    return (
        <>
            <div
                className="image-container"
                ref={imageContainer}
            >
                {images.map((image, index) => {
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} height={300} />
                })}
            </div>
        </>
    )
}

export default GalleryList;