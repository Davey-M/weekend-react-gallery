import { useState } from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import './GalleryItem.css';

function GalleryItem({ image, updateImage }) {

    const [ description, toggleDescription ] = useState(false);

    const handleClickLike = () => {
        updateImage(image.id, image.likes + 1);
    }

    const handleDescriptionToggle = () => {
        toggleDescription(!description);
    }

    return (
        <div className="galleryImage">
            <img 
                src={ image.path }
                alt="Image Not Found"
                onClick={ handleDescriptionToggle }
                className='image'
            />
            {description && <p className="description">{ image.description }</p>}
            <div className="image-footer">
                <Button
                    variant="contained"
                    onClick={handleClickLike}
                    size="small"
                    endIcon={<ThumbUpIcon className="icon" />}
                    color="primary"
                >
                    { image.likes }
                </Button>
            </div>
        </div>
    )
}

export default GalleryItem;