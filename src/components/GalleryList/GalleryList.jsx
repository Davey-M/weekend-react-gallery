import GalleryItem from "../GalleryItem/GalleryItem";

import './GalleryList.css'

function GalleryList({ images, updateImage }) {
    return (
        <>
            <div className="image-container">
                {images.map(image => {
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} />
                })}
            </div>
        </>
    )
}

export default GalleryList;