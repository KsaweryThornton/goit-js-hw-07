import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryElem = galleryItems
  .map((item) => {
    `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryElem);

gallery.onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
    instance.show();
  }
};
