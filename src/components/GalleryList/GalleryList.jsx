import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ images, updateImage }) {
    return (
        <>
            <div>
                {images.map(image => {
                    return <GalleryItem key={image.id} image={image} updateImage={updateImage} />
                })}
            </div>
        </>
    )
}

export default GalleryList;