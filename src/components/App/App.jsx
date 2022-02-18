import React from 'react';
const { useState, useEffect } = React;
import Axios from 'axios';
import './App.css';

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

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <p>Gallery goes here</p>
            {images.map(image => {
                return (
                    <div key={image.id}>
                        <img src={image.path} alt="Image" width="200" />
                        <p>{image.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
