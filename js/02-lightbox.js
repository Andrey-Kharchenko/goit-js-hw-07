import { galleryItems } from './gallery-items.js';

// Change code below this line

  // <li class="gallery__item">
  //     <a class="gallery__link" href="large-image.jpg">
  //         <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  //     </a>
  // </li>
    
const galleryContainer = document.querySelector('.gallery');
const gallaryMarkup = createGallaryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', gallaryMarkup);

function createGallaryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}"  
            alt="${description}" />
        </a>
        </li>
        `;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// window.addEventListener('load', () => {
//   lightbox.open();
// });

// Там место lightbox.load(); надо было lightbox.open(); но в таком варианте при загрузке страницы галерея сразу автоматом будет открыватся))
// Поэтому просто так оставляю)
