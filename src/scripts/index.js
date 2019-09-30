// Imports
//////////

// JS
import { initDetail } from './initDetail';
import { initOverview } from './initOverview';
import { api_key } from "./config";
import queryString from "query-string";

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';


// Functionality
////////////////

const parsed = queryString.parse(location.search);

if(parsed.movieId) {
    initDetail();
} else {
    initOverview();
}
