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
    // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cf09aafcb2c7ae356c4089e437aa0ce3
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
};