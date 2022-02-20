import { useState, useEffect, useRef } from 'react';

import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage }) {

    const imageContainer = useRef();
    const [ width, setWidth ] = useState(Math.floor(window.innerWidth * .7));

    // const width = Math.floor(window.innerWidth * .7);

    const imageHeights = images.map(image => {
        return 0
    })

    const rows = [0]

    const setImageHeights = () => {
        for (let i = 0; i < images.length; i++) {
            const currentRow = imageHeights[i];
            const image = images[i]

            // console.log({image});
            const scaleFactor = 300 / image['image-height'];
            const imageWidth = image['image-width'] * scaleFactor;
            const imageHeight = image['image-height'] * scaleFactor;

            console.log({
                scaleFactor,
                imageHeight,
                imageWidth
            });

            if (rows[currentRow] + imageWidth > width) {
                for (let j = i; j < images.length; j++) {
                    imageHeights[j] = currentRow + 1;
                }

                const gap = width - rows[currentRow];
                const gapPercent = gap / width;
                rows[currentRow] = 300 + (300 * gapPercent);

                console.log({
                    gap,
                    gapPercent,
                    row: rows[currentRow],
                })

                rows.push(imageWidth);
            }
            else {
                rows[currentRow] = rows[currentRow] + imageWidth;
            }
        }
    }

    setImageHeights();

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
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} height={rows[imageHeights[index]]} />
                })}
            </div>
        </>
    )
}

export default GalleryList;