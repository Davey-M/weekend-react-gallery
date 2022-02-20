import React from 'react';
const { useState, useEffect } = React;
import Axios from 'axios';
import './App.css';

// mui theme
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

// component imports
import GalleryList from '../GalleryList/GalleryList';
import ImageForm from '../ImageForm/ImageForm';

function App() {

    // change the buttons from blue to yellowOrange
    const theme = createTheme({
        palette: {
            primary: {
                main: '#e79e15',
                contrastText: 'white'
            }
        }
    })

    // state variables
    const [ images, setImages ] = useState([]);

    // get images from the server
    const getImages = () => {
        Axios.get('/gallery')
            .then(response => {
                setImages(response.data);
            })
            .catch(err => {
                console.error('Error in getItems:', err);
            })
    }

    // update the like count of the images on the server
    const updateImage = (id, likes) => {

        const data = {
            likes,
        }

        Axios.put(`/gallery/like/${id}`, data)
            .then(response => {
                getImages();
            })
            .catch(err => {
                console.error('Error in updateImage:', err);
            });
    }

    // run get images once on initial load
    useEffect(() => {
        getImages();
    }, []);

    return (
        <div>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <header className="App-header">
                        <h1 className="App-title">React Image Gallery</h1>
                    </header>
                    {/* <p>Gallery goes here</p> */}
                    <main>
                        <ImageForm 
                            getImages={getImages}
                        />

                        <GalleryList images={images} updateImage={updateImage} getImages={getImages} />
                    </main>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default App;
