import { useState } from "react";

function GalleryItem({ image, updateImage }) {

    const [ description, toggleDescription ] = useState(false);

    const handleClickLike = () => {
        updateImage(image.id);
    }

    const handleDescriptionToggle = () => {
        toggleDescription(!description);
    }

    const imageStyles = {
        width: 'max-content',
        margin: 'auto',
    }

    return (
        <>
            <div onClick={ handleDescriptionToggle } style={imageStyles}>
                <img 
                    src={ image.path }
                    alt="Image Not Found"
                    width="200"
                />
                {description && <p>{ image.description }</p>}
            </div>
            <div>
                <p>{ image.likes } likes</p>
                <button onClick={handleClickLike}>Like</button>
            </div>
        </>
    )
}

export default GalleryItem;