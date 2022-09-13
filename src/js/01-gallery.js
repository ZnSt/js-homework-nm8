import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const divRefs = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join('');

divRefs.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// <section id="tree"></section>

// const food = {
//   Meat: {
//     Pork: {},
//     Beef: {},
//   },

//   Fruit: {
//     Red: {
//       Cherry: { ding: {} },
//       Strawberry: {},
//     },
//     Yellow: {
//       Banana: {},
//       Pineapple: {},
//     },
//   },
// };

// const sectionRef = document.querySelector('#tree');

// function createTree(element, dataObj) {
//   const list = document.createElement('ul');
//   const dataObjKeys = Object.keys(dataObj);
//   dataObjKeys.forEach(key => {
//     const item = document.createElement('li');
//     item.textContent = key;
//     list.append(item);
//     createTree(item, dataObj[key]);
//   });
//   element.append(list);
// }
// createTree(sectionRef, food);
