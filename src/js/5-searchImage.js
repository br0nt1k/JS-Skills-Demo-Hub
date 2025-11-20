import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./pixabay-api";

import { createGallery, clearGallery, showLoader, hideLoader, createLightBox } from "./render-functions";

const refs = {
    searchForm: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
}

const errorEmptyInput = {
    message: 'Search field cannot be empty. Please enter your request.',
    backgroundColor: '#ff9900',
    messageColor: '#ffffff',
    position: 'topRight',
};

const errorMessage = {
    message: 'Sorry, there are no images matching your search query. Please try again!',
    backgroundColor: '#B51B1B',
    messageColor: '#ffffff',
    position: 'topRight',
};

const errorServerConnection = {
    title: 'ERROR',
    titleColor: '#ffffff',
    message: 'Error connecting to server',
    messageColor: '#ffffff',
    backgroundColor: '#B51B1B',
    position: 'topRight',
};

refs.searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    clearGallery();

    const usersRequest = refs.searchForm.elements['search-text'].value.trim();

    if (!emptyInputCheck(usersRequest)) {
        refs.searchForm.reset();
        return;
    }

    showLoader();

    getImagesByQuery(usersRequest)
        .then(response => {
            const array = response.data.hits;
            
            if (!checkInput(array)) {
                return;
            }
            
            hideLoader();
            createGallery(array);
            createLightBox();
        })
        .catch(error => {
            console.log("Server Error:", error.message);
            hideLoader();
            iziToast.show(errorServerConnection);
        })
        .finally(() => {
            refs.searchForm.reset();
        });
}

function emptyInputCheck(usersRequest) {
    if (!usersRequest) {
        iziToast.show(errorEmptyInput); 
        return false;
    }
    return true; 
}

function checkInput(array) {
    if (!array.length) {
        iziToast.show(errorMessage); 
        clearGallery();
        hideLoader();
        return false;
    }
    return true;
}
