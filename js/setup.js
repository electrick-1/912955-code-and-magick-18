'use strict';

var WIZARD_COUNT = 4;
var WIZARD = {
  name: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  secondName: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  coatColor: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyesColor: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
};
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var SETUP_WIZARD = {
  coatColor: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyesColor: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  fireballColor: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupInput = setup.querySelector('input[name="username"]');
var setupWizard = setup.querySelector('.setup-wizard-appearance');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  setup.classList.remove('hidden');
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target === setupInput) {
      evt.stopPropagation();
    } else {
      closePopup();
    }
  }
});

var userNameInput = setup.querySelector('.setup-user-name');
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

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getWizard = function () {
  var arr = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    arr[i] = {
      name: WIZARD.name[generateRandomNumber(0, WIZARD.name.length - 1)] + ' ' + WIZARD.secondName[generateRandomNumber(0, WIZARD.secondName.length - 1)],
      coatColor: WIZARD.coatColor[generateRandomNumber(0, WIZARD.coatColor.length - 1)],
      eyesColor: WIZARD.coatColor[generateRandomNumber(0, WIZARD.eyesColor.length - 1)]
    };
  }
  return arr;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < getWizard().length; i++) {
  fragment.appendChild(renderWizard(getWizard()[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

wizardCoat.addEventListener('click', function () {
  var color = SETUP_WIZARD.coatColor[generateRandomNumber(0, SETUP_WIZARD.coatColor.length - 1)];
  wizardCoat.style.fill = color;
  setupWizard.querySelector('input[name="coat-color"]').value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = SETUP_WIZARD.eyesColor[generateRandomNumber(0, SETUP_WIZARD.eyesColor.length - 1)];
  wizardEyes.style.fill = color;
  setupWizard.querySelector('input[name="eyes-color"]').value = color;
});

setupFireball.addEventListener('click', function () {
  var color = SETUP_WIZARD.fireballColor[generateRandomNumber(0, SETUP_WIZARD.fireballColor.length - 1)];
  setupFireball.style.backgroundColor = color;
  setupFireball.querySelector('input[name="fireball-color"]').value = color;
});
