import { TextField, Button } from '@mui/material'
import { useRef, useState } from 'react';
import Axios from 'axios';

import './ImageForm.css';

function ImageForm({ getImages }) {

    // state variables for inputs
    const [ urlInput, setUrlInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');

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

        // console.log(data);

        Axios.post('/gallery', data)
            .then(response => {
                getImages();

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