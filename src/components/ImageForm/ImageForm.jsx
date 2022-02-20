import { TextField, Button } from '@mui/material'
import { useRef, useState } from 'react';
import Axios from 'axios';

import './ImageForm.css';

function ImageForm({ getImages }) {

    // state variables for inputs
    const [ urlInput, setUrlInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');

    // get the preview image so its height and width can be stored.
    // the height and width were never used but I may come back to add in the scaling feature I wanted
    const previewImage = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // data to send to server
        const data = {
            path: 'images/' + urlInput,
            description: descriptionInput,
            width: previewImage.current.naturalWidth,
            height: previewImage.current.naturalHeight,
        }

        // console.log(data); // test

        // send data to the server
        Axios.post('/gallery', data)
            .then(response => {
                // get the updated images
                getImages();

                // clear input fields
                setUrlInput('');
                setDescriptionInput('');
            })
            .catch(err => {
                console.error('Error with post:', err);
            })
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => {
                        setUrlInput(e.target.value);
                    }}
                    value={urlInput}
                    onSubmit={handleSubmit}
                    fullWidth
                    label="URL"
                    variant="outlined"
                />
                <TextField
                    onChange={(e) => {
                        setDescriptionInput(e.target.value);
                    }}
                    value={descriptionInput}
                    onSubmit={handleSubmit}
                    fullWidth
                    multiline
                    rows={6}
                    label="Description"
                    variant="outlined"
                />
                <Button variant="contained" onClick={handleSubmit} >Add Image</Button>
            </form>
            <img src={'images/' + urlInput} alt="" ref={previewImage}/>
        </div>
    )
}

export default ImageForm;