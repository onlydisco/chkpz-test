$(document).ready(function () {
  let barcodeValue;
  const inputElement = $('#barcode');
  const buttonElement = $('.form__button');
  const formElemet = $('.form');

  if (!barcodeValue) {
    buttonElement.prop('disabled', true);
  }

  inputElement.on('input', function () {
    barcodeValue = $(this).val().trim();

    if (barcodeValue) {
      buttonElement.prop('disabled', false);
    } else {
      buttonElement.prop('disabled', true);
    }
  });

  formElemet.on('submit', function (e) {
    e.preventDefault();
    console.log(barcodeValue);
    inputElement.val('');
  });
});
