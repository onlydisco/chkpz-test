$(document).ready(function () {
  let barcodeValue;
  const inputElement = $('#barcode');
  const buttonElement = $('.form__button');
  formElemet = $('.form');

  if (!barcodeValue) {
    buttonElement.prop('disabled', true);
  }

  inputElement.on('input', function () {
    barcodeValue = $(this).val().trim();

    if (barcodeValue) {
      buttonElement.removeAttr('disabled');
    } else {
      buttonElement.attr('disabled', 'disabled');
    }
  });

  formElemet.on('submit', function (e) {
    e.preventDefault();
    console.log(barcodeValue);
    inputElement.val('');
  });
});
