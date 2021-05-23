import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
}

const cardsMarkup = createGalleryMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', cardsMarkup);

refs.gallery.addEventListener('click', toOpenModal);
refs.lightbox.addEventListener('click', closeModal);

function createGalleryMarkup(galleryItems) {
  return galleryItems
  .map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`
  })
  .join('');
}

function toOpenModal(e) {
  if(!e.target.classList.contains('gallery__image')) {
    return;
  };
  e.preventDefault()
  refs.lightbox.classList.add('is-open');
  refs.lightboxImg.setAttribute('src', e.target.getAttribute('data-source'));
}

function closeModal(e) {
  if(e.target.classList.contains('lightbox__button')) {
		refs.lightbox.classList.remove('is-open');
		refs.lightboxImg.removeAttribute('src');
  };
}

