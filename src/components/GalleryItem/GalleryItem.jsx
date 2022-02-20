import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';

import Axios from "axios";
import swalBase from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(swalBase);

// mui theme
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import './GalleryItem.css';

function GalleryItem({ image, updateImage, getImages }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e79e15',
                contrastText: 'white'
            }
        }
    })

    const [ description, toggleDescription ] = useState(false);

    const handleClickLike = () => {
        updateImage(image.id, image.likes + 1);
    }

    const handleDescriptionToggle = () => {
        toggleDescription(!description);
    }

    // remove and image from the database
    const deleteImage = () => {
        // sweet alerts gives a popup to ensure the user doesn't accidentally delete their data
        Swal.fire({
            icon: 'warning',
            // change the default popup with some react components and the material ui theme
            // the whole thing is wrapped in a theme provider because sweet alerts renders outside of the original theme provider in app.jsx
            html: <div>
                <ThemeProvider theme={theme}>
                    <h1>Are you sure?</h1>
                    <p>Deleting an image can not be undone.</p>
                    <div>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<DeleteIcon />}
                            color="primary"
                            style={{
                                marginRight: '10px',
                            }}
                            onClick={() => {
                                Swal.clickConfirm();
                            }}
                        >
                            Delete Image
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            onClick={() => {
                                Swal.clickCancel();
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </ThemeProvider>
            </div>,
            showCancelButton: false,
            // showConfirmButton: true,
            showConfirmButton: false,
        })
            .then(answer => {
                // console.log(answer);

                // send the delete request to the server
                if (answer.isConfirmed) {
                    Axios.delete(`/gallery/${image.id}`)
                        .then(response => {
                            // get the updated images
                            getImages();
                        })
                        .catch(err => {
                            // handle errors
                            console.error('Error with delete ajax', err);
                        })
                }
            })
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
                {/* <Button
                    variant="contained"
                    color="error"
                    size="small"
                >
                </Button> */}

                <IconButton
                    onClick={deleteImage}
                    variant="contained"
                    color="inherit"
                    size="small"
                >
                    <DeleteIcon />
                </IconButton>
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
            <div className="image-header">
                <p>{ image.likes }</p>
            </div>
        </div>
    )
}

export default GalleryItem;