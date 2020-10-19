'use strict';

const buttonOffers = document.querySelector('.button-offers');
const offersModal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal-list');

const areaDateOfDeparture = document.querySelector('.date-of-departure');
const areaDateOfArrival = document.querySelector('.date-of-arrival');
const areaAdults = document.querySelector('.adults');
const areaChild = document.querySelector('.child');

buttonOffers.addEventListener('click', function() {
  offersModal.classList.toggle('modal-show');
  areaDateOfArrival.focus();
});

modalForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

modalForm.addEventListener("submit", function (evt) {
  if (!areaDateOfDeparture.value || !areaDateOfArrival.value || !areaAdults.value || !areaChild.value) {
    evt.preventDefault();
  }
});
