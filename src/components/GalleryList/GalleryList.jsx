import { useState, useEffect, useRef } from "react";

import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage }) {

    const imageContainer = useRef();
    const [ containerWidth, setContainerWidth ] = useState(900);

    // const width = Math.floor(window.innerWidth * .7);

    const [ imageRows, setImageRows ] = useState([]);
    const [ rowHeights, setRowHeights ] = useState([]);

    // const imageRows = []

    // const rowHeights = []

    const setImageHeights = () => {

        let currentWidth = 0;

        let currentRow = 0;

        for (let i = 0 ; i < images.length; i++) {
            console.log(images[i]);

            const image = images[i];

            let scaleFactor = 300 / image['image-height'];
            let imageWidth = image['image-width'] * scaleFactor;
            let imageHeight = image['image-height'] * scaleFactor;

            if (currentWidth + (imageWidth + 10) > containerWidth) {

                let gap = (containerWidth - currentWidth) - 10;
                let scalePercent = gap / containerWidth;

                console.log(scalePercent);

                currentWidth = imageWidth;

                let newHeight = 300 + (300 * scalePercent);
                // rowHeights.push(newHeight);
                setRowHeights([...rowHeights, newHeight]);
                currentRow++;
                // imageRows.push(currentRow);
                setImageRows([...imageRows, currentRow])
            }
            else if (i === images.length - 1) {
                currentWidth += (imageWidth + 10);
                setImageRows([...imageRows, currentRow])
                setRowHeights([...rowHeights, 300]);
            }
            else {
                currentWidth += (imageWidth + 10);
                setImageRows([...imageRows, currentRow])
            }
        }

        console.log({
            imageRows,
            rowHeights
        })
    }

    useEffect(() => {
        setImageHeights()
    }, [])

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
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} height={rowHeights[imageRows[index]]} />
                })}
            </div>
        </>
    )
}

export default GalleryList;