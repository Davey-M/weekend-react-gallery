import { TextField, Button } from '@mui/material'
import { useState } from 'react';

import './ImageForm.css';

function ImageForm() {

    const [ urlInput, setUrlInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting');

        console.log({ urlInput, descriptionInput })
    }

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => {
                        setUrlInput(e.target.value);
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                    label="URL"
                    variant="outlined"
                />
                <TextField
                    onChange={(e) => {
                        setDescriptionInput(e.target.value);
                    }}
                    onSubmit={handleSubmit}
                    fullWidth
                    multiline
                    rows={6}
                    label="Description"
                    variant="outlined"
                />
                <Button variant="contained" onClick={handleSubmit} >Add Image</Button>
            </form>
        </div>
    )
}

export default ImageForm;