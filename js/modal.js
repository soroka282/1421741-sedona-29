'use strict';

var buttonOffers = document.querySelector('.button-offers');
var offersModal = document.querySelector('.modal');
var areaDateOfDeparture = document.querySelector('.date-of-departure');
var areaDateOfArrival = document.querySelector('.date-of-arrival');
var areaAdults = document.querySelector('.adults');
var areaChild = document.querySelector('.child');

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
