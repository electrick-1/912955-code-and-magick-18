'use strict';
(function () {
  window.util = {
    ENTER_KEYCODE: 13,
    ESC_KEYCODE: 27,
    setup: document.querySelector('.setup'),
    generateRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupInput = window.util.setup.querySelector('input[name="username"]');

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    window.util.setup.removeAttribute('style');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      if (evt.target === setupInput) {
        evt.stopPropagation();
      } else {
        closePopup();
      }
    }
  });

  var userNameInput = window.util.setup.querySelector('.setup-user-name');
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя должно состоять махсимум из 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
