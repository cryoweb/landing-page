(function() {
  var me = {};
  var form = document.querySelector('.form-container');
  var closeButton = null;
  
  function onClose() {
    me.close();
    closeButton.removeEventListener('click', onClose);
  }
  
  me.open = function() {
    form.classList.remove('is-hidden');
    
    closeButton = document.querySelector('.form__close-button');
    closeButton.addEventListener('click', onClose);
  };
  
  me.close = function() {
    form.classList.add('is-hidden');
  };
  
  me.isValid = function() {
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var numberValue = document.querySelector('[data-number]').value;
    var emailValue = document.querySelector('[data-email]').value;
    
    if (!me.isAllCompleted(requiredFields)) {
      console.log('Заполните все необходимые поля');
      return false;
    } else if (!lendos.validation.isNumber(numberValue)) {
      console.log('Неверный номер');
      return false;
    } else if (!lendos.validation.isEmail(emailValue)) {
      console.log('Неверный email');
      return false;
    }
    return true;
  };
  
  me.isAllCompleted = function(data) {
    var result = true;
    
    for (var i = 0; i < data.length; i++) {
      if (!lendos.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }
    
    return result;
  };
  
  lendos.form = me;
}());