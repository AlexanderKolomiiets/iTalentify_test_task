'use strict';

const button = document.querySelector('.witcher__code__button');
const code = document.querySelector('.witcher__code__text');

button.addEventListener('click', () => {
  navigator.clipboard.writeText(code.textContent)
    .then(() => {
      button.textContent = 'copied';
    })
    .catch(error => {
      throw new Error(error);
    });
});
