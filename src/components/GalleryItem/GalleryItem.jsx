import { useRef, useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import './GalleryItem.css';

function GalleryItem({ image, updateImage }) {

    const [ description, toggleDescription ] = useState(false);
    const [ shape, setShape ] = useState('Tall');

    const thisImage = useRef();

    const handleClickLike = () => {
        updateImage(image.id, image.likes + 1);
    }

    const handleDescriptionToggle = () => {
        toggleDescription(!description);
    }

    useEffect(() => {

        console.log(thisImage.current);

        if (thisImage.current.naturalWidth > thisImage.current.naturalHeight) {
            setShape('Long');
        }
    })

    return (
        <div className="galleryImage">
            <img 
                src={ image.path }
                alt="Image Not Found"
                style={{borderRadius: '4px'}}
                onClick={ handleDescriptionToggle }
                className={`image` + shape}
                ref={thisImage}
            />
            {description && <p className="description">{ image.description }</p>}
            <div className="image-footer">
                <Button
                    variant="contained"
                    onClick={handleClickLike}
                    size="small"
                    endIcon={<ThumbUpIcon />}
                    color="primary"
                >
                    { image.likes }
                </Button>
            </div>
        </div>
    )
}

export default GalleryItem;