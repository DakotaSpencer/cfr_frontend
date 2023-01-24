import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function Navbar({getRandomMovie}) {
    const [movie,setMove] = useState({})

    getRandomMovie = () => {
        let movieID = Math.ceil(Math.random()*999999);
        let movie = axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=96fdc416520d2dd5b75c1c82c854e506`)
    
    }

    return (
        <nav>
            <button onClick={getRandomMovie}>Random</button>
        </nav>
    )
}

export default Navbar