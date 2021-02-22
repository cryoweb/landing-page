(function() {
  var me = {};
  
  me.isEmail = function(email) {
    var re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  };
  
  me.isNumber = function(number) {
    var re = /^\d+$/;
    return re.test(number);
  };
  
  me.isNotEmpty = function(str) {
    return Boolean(str);
  };
  
  lendos.validation = me;
}());