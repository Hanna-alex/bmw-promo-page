const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');

const openModal = () => {
  modalElem.classList.remove('hidden');
};

const closeModal = () => {
  modalElem.classList.add('hidden');
};

const designElem = document.querySelector('.design-text');

designElem.addEventListener('click', (event) => {
  console.log(event.target);
  const target = event.target;
  if (target.classList.contains('more')) openModal();
})

modalElem.addEventListener('click', (event) => {
  // console.log(event.target);
  //на каком элементе бы произведен клик
  const target = event.target;

  if (target.classList.contains('overlay') ||
    target.classList.contains('modal__close')) {
    closeModal()
  }

  /* пример:
   if (target.classList.contains('modal__title')) {
     target.style.color = 'green'
   }
  */



})