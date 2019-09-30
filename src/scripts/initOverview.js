// Imports
//////////

import { axios } from 'axios';
import { api_key, baseUrl } from './config';


// Functionality
////////////////

export const initOverview = () => {
    // Clear content div
    clearContent();

    // Do the ajax request
    axios.get(`url&?api_key=${api_key}`)
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