import { galleryItems } from './gallery-items.js';

// Change code below this line

  // <li class="gallery__item">
  //     <a class="gallery__link" href="large-image.jpg">
  //         <img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" />
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
            data-source="${original}" 
            alt="${description}" />
        </a>
        </li>
        `;
        })
        .join('');
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}"/>
  `);

  instance.show();

  document.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', handleKeyPress);
    }
  }
}

galleryContainer.addEventListener('click', openModal);


