// Imports
//////////

import axios from 'axios';
import { api_key, baseUrl } from './config';


// Functionality
////////////////

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

const clearContent = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
};

const generateContent = (data) => {
    console.log(data);
    // Loop over de array en maak een card voor elke film
    data.results.map(movie => {
        // Maak card aan
        const contentDiv = document.getElementById('content');
        console.log(movie.id)
        contentDiv.innerHTML+=`
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview.substr(200)}...</p>
                    <a href="#" class="btn btn-primary">Show detail</a>
                </div>
           </div>`
        // Voeg properties toe aan card

    })
};