import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage, getImages }) {
    return (
        <>
            <div className="image-container">
                {images.map(image => {
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} getImages={getImages} />
                })}
            </div>
        </>
    )
}

export default GalleryList;