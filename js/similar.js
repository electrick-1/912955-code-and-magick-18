'use strict';
(function () {
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

  var similarListElement = window.util.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

  var getWizard = function () {
    var arr = [];
    for (var i = 0; i < WIZARD_COUNT; i++) {
      arr[i] = {
        name: WIZARD.name[window.util.generateRandomNumber(0, WIZARD.name.length - 1)] + ' ' + WIZARD.secondName[window.util.generateRandomNumber(0, WIZARD.secondName.length - 1)],
        coatColor: WIZARD.coatColor[window.util.generateRandomNumber(0, WIZARD.coatColor.length - 1)],
        eyesColor: WIZARD.coatColor[window.util.generateRandomNumber(0, WIZARD.eyesColor.length - 1)]
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

  window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
})();
