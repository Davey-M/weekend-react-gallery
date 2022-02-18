import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ images }) {
    return (
        <>
            <div>
                {images.map(image => {
                    return <GalleryItem key={image.id} />
                })}
            </div>
        </>
    )
}

export default GalleryList;