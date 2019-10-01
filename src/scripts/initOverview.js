// Imports
//////////

import axios from 'axios';
import { api_key, baseUrl } from './config';


// Functionality
////////////////

// Function to initialize the movie overview
export const initOverview = () => {
    // Clear content div
    clearContent();

    // Do the ajax request
    axios.get(`${baseUrl}&api_key=${api_key}`)
        .then(res => {
           console.log(res.data);
            // Generate content
            generateContent(res.data);
        });
};


// Function to clear the content from the page
const clearContent = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
};


// Function to generate the movie content
const generateContent = (data) => {

    // Map through each movie in the array & create a Card for each movie
    data.results.map(movie => {

        // Movie props
        const cardImageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        const movieDetailLink = `http://localhost:8080/?movie=${movie.id}`;

        // Create the card & add it to the content div
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML += `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card h-100 m-auto">
                    <img src=${cardImageUrl} class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div class="card-body-section mb-4">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.overview.substr(0, 200)}...</p>
                        </div>
                        <div class="card-body-section d-flex justify-content-center">
                            <a href=${movieDetailLink} class="btn btn-secondary">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
};