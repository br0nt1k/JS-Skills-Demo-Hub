import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53324015-4659ca59c2f407a377d78da87'; 

export default function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    return axios.get(`${BASE_URL}?${params}`);
}