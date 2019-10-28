'use strict';
(function () {
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

  var setupWizard = window.util.setup.querySelector('.setup-wizard-appearance');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = window.util.setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var newColor = SETUP_WIZARD.coatColor[window.util.generateRandomNumber(0, SETUP_WIZARD.coatColor.length - 1)];
    wizardCoat.style.fill = newColor;
    setupWizard.querySelector('input[name="coat-color"]').value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = SETUP_WIZARD.eyesColor[window.util.generateRandomNumber(0, SETUP_WIZARD.eyesColor.length - 1)];
    wizardEyes.style.fill = newColor;
    setupWizard.querySelector('input[name="eyes-color"]').value = newColor;
    wizard.onEyesChange(newColor);
  });

  setupFireball.addEventListener('click', function () {
    var newColor = SETUP_WIZARD.fireballColor[window.util.generateRandomNumber(0, SETUP_WIZARD.fireballColor.length - 1)];
    setupFireball.style.backgroundColor = newColor;
    setupFireball.querySelector('input[name="fireball-color"]').value = newColor;
  });
})();
