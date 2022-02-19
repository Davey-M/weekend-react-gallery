import React from 'react';
const { useState, useEffect } = React;
import Axios from 'axios';
import './App.css';

// mui theme
import { createTheme } from '@mui/material/styles';

// component imports
import GalleryList from '../GalleryList/GalleryList';
import { ThemeProvider } from '@emotion/react';

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e79e15',
                contrastText: 'white'
            }
        }
    })

    const [ images, setImages ] = useState([]);

    const getImages = () => {
        Axios.get('/gallery')
            .then(response => {
                setImages(response.data);
            })
            .catch(err => {
                console.error('Error in getItems:', err);
            })
    }

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

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <header className="App-header">
                    <h1 className="App-title">Gallery of My Life</h1>
                </header>
                {/* <p>Gallery goes here</p> */}
                <GalleryList images={images} updateImage={updateImage} />
            </ThemeProvider>
        </div>
    );
}

export default App;
