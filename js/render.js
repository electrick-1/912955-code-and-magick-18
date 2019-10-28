'use strict';

(function () {

  var WIZARD_COUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');
  var similarListElement = window.util.setup.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    similarListElement.innerHTML = '';
    for (var i = 0; i < WIZARD_COUNT; i++) {
      similarListElement.appendChild(renderWizard(data[i]));
    }

    window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
