(function() {
  var openFormButton = document.querySelector('.btn-down');
  var form = document.querySelector('.form');
  
  if (openFormButton) {
    openFormButton.addEventListener('click', function(e) {
      e.preventDefault();
      lendos.form.open();
    });
  }
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (lendos.form.isValid()) {
        console.log('All good');
      } else {
        console.log('Is not valid');
      }
    });
  }

}());