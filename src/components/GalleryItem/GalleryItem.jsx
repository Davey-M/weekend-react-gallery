function GalleryItem({ image }) {
    return (
        <>
            <div>
                <img src={image.path} alt="" />
            </div>
            <div>
                <p>{ image.likes } likes</p>
                <button>Like</button>
            </div>
        </>
    )
}

export default GalleryItem;