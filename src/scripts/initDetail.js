// Import

import {api_key, baseUrlMovie, baseUrlBackdrop, baseUrlCardImg} from './config';
import axios from 'axios';


// Functionality

export const initDetail = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('movie');

    // Do the ajax request
    axios.get(`${baseUrlMovie}${myParam}?api_key=${api_key}`)
        .then(res => {
            // Generate content
            generateContent(res.data);
        });

    function generateContent(data) {
        // Generate poster URL
        const moviePoster = `${baseUrlCardImg}${data.poster_path}`;

        // Generate the info for the production companies
        var companyDiv = "";
        data.production_companies.forEach(company => {

            // Create the url for the company logo if there is one
            const companyLogo = company.logo_path ? `${baseUrlCardImg}${company.logo_path}` : '#';

            // Fill the company info
            companyDiv +=
                `
                    <div class="d-flex flex-column align-items-center text-center">
                        <h5 class= "text-light mb-4">${company.name}</h5>
                        <img src="${companyLogo}" alt="" width="100px">                    
                    </div>
                    
                `;
        });

        // Get the contentDiv element & generate its html content
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML =
            `
                <div class="jumbotron pb-0" style= "background-image: url(${baseUrlBackdrop}${data.backdrop_path}); background-size: cover; background-repeat: no-repeat;">
                    <h1 class="display-4 text-light">${data.title}</h1>
                    <p class="lead text-light">${data.overview}</p>
                    <hr class="my-4 bg-light">
                    <div class="d-flex justify-content-between bg-dark p-2 mb-4"> 
                        <p class= "text-light">Score: ${data.vote_average}</p>
                        <p class= "text-light"> ${data.release_date}</p>
                    </div>
                    <div class="d-flex justify-content-around h-50">
                        <img src="${moviePoster}" class="img-fluid img thumbnail h-100">
                        ${companyDiv}
                    </div>
                    <div class="d-flex justify-content-center">
                        <a class="btn btn-primary btn-lg" href="http://localhost:8080" role="button">Go back</a>                    
                    </div>
                </div>
           `;
    };
};

