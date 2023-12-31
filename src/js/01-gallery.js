import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');

const images = galleryItems.map(item => {
  return `
    <li class ="gallery__item">
      <a class="gallery__link" href="${item.original}">
                 <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
             </a>
    </li>`;
});

galleryContainer.insertAdjacentHTML('beforeend', images.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
