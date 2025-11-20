import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loaderContainerRef = document.querySelector('.loader-container'); 


export function createGallery(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="item-link" href="${largeImageURL}">
    <img class="img" src="${webformatURL}" alt="${tags}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${downloads}</p>
      </li>
    </ul></a
  >
</li>`
    )
    .join('');
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
    if (loaderContainerRef) {
        loaderContainerRef.classList.remove('is-hidden'); 
    }
}

export function hideLoader() {
    if (loaderContainerRef) {
        loaderContainerRef.classList.add('is-hidden'); 
    }
}

export function createLightBox() {
  let galleryLightBox = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  galleryLightBox.refresh();
}




