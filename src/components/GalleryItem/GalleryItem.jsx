import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function GalleryItem({ image, updateImage }) {

    const [ description, toggleDescription ] = useState(false);

    const handleClickLike = () => {
        updateImage(image.id, image.likes + 1);
    }

    const handleDescriptionToggle = () => {
        toggleDescription(!description);
    }

    const imageStyles = {
        width: 'max-content',
        margin: 'auto',
        position: 'relative',
    }

    const descriptionStyles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#000000aa',
        margin: '0rem',
        color: '#ffffff',
    }

    return (
        <>
            <div onClick={ handleDescriptionToggle } style={imageStyles}>
                <img 
                    src={ image.path }
                    alt="Image Not Found"
                    width="200"
                    style={{borderRadius: '4px'}}
                />
                {description && <p style={descriptionStyles}>{ image.description }</p>}
            </div>
            <div>
                <Button
                    variant="contained"
                    onClick={handleClickLike}
                    size="small"
                    endIcon={<ThumbUpIcon />}
                >
                    { image.likes }
                </Button>
            </div>
        </>
    )
}

export default GalleryItem;