import React from 'react';
const { useState, useEffect } = React;
import Axios from 'axios';
import './App.css';

// component imports
import GalleryList from '../GalleryList/GalleryList';

function App() {

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

    const updateImage = (id) => {
        Axios.put(`/gallery/${id}`)
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
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <p>Gallery goes here</p>
            <GalleryList images={images} />
        </div>
    );
}

export default App;
