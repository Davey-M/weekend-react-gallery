function GalleryItem({ image }) {
    return (
        <>
            <div>
                <img src={ image.path } alt="" width="200" />
                <p>{ image.description }</p>
            </div>
            <div>
                <p>{ image.likes } likes</p>
                <button>Like</button>
            </div>
        </>
    )
}

export default GalleryItem;