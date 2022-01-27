import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);

const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join(``);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    
    const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);
    modal.show();

    if(modal.visible()) {
        window.addEventListener(`keydown`, (event) => {
            console.log(event);
            if(event.code === `Escape`) {
                modal.close();
            };
        });
    };
});
