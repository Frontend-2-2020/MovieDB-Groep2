// Import

import { api_key, baseUrlMovie, baseUrlBackdrop } from './config';
import axios from 'axios';


// Functionality

export const initDetail = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('movie');
    console.log(myParam);

    // Do the ajax request
    axios.get(`${baseUrlMovie}${myParam}?api_key=${api_key}`)
        .then(res => {
            // Generate content
           generateContent(res.data);

            console.log(res);
        });

        function generateContent(data){
            var companyDiv = "";
            data.production_companies.map(company =>{
                companyDiv += `
                <p class= "text-light">   ${company.name} </p>
                `;
            });

           var contentDiv =  document.getElementById("content");
           contentDiv.innerHTML = `
            <div class="jumbotron" style= "background-image: url(${baseUrlBackdrop}${data.backdrop_path}); background-size: cover; background-repeat: no-repeat;">
                <h1 class="display-4 text-light">${data.title}</h1>
                <p class="lead text-light">${data.overview}</p>
                <hr class="my-4 bg-light">
                <div class="d-flex justify-content-between bg-dark p-2 mb-4"> 
                <p class= "text-light">Score: ${data.vote_average}</p>
                    <p class= "text-light"> ${data.release_date}</p>
                </div>
                <div class="d-flex justify-content-around h-50">
                <img src="${data.poster_path}" class="img-fluid img thumbnail h-100">
                ${companyDiv}
                </div>
                <a class="btn btn-primary btn-lg" href="http://localhost:8080" role="button">Go back</a>
            </div>
           `;
        };
};

