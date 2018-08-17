var formElement = document.querySelector('#user-form');

var validationObject = {
  RegEx: {
    zipCode: /\d{2}-\d{3}/,
    tel: /\d{3}-\d{3}-\d{3}/,
    email: /^\S+@\S+\.[a-zA-Z]+$/,
    string: /^[a-zA-Z]{3,}/
  },

  validate: function (element, RegEx) {
    var value = element.value;

    if (RegEx.test(value)) {
      element.classList.add('is-valid');
      element.classList.remove('is-invalid');
    } else {
      element.classList.add('is-invalid');
      element.classList.remove('is-valid');
    }
  }
}

window.addEventListener('load', function () {
  formElement.addEventListener('submit', function (event) {
    if (!formElement.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();

      validationObject.validate(document.querySelector('#name'), validationObject.RegEx.string);
      validationObject.validate(document.querySelector('#surname'), validationObject.RegEx.string);

      validationObject.validate(document.querySelector('#email'), validationObject.RegEx.email);
      validationObject.validate(document.querySelector('#tel'), validationObject.RegEx.tel);

      validationObject.validate(document.querySelector('#zip'), validationObject.RegEx.zipCode);
      validationObject.validate(document.querySelector('#city'), validationObject.RegEx.string);
    } else {
      window.alert('Form was sent successfully.');
    }
    formElement.classList.add('was-validated');
  }, false);
});
