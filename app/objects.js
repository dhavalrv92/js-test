exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var res = []
    for (var objProp in obj) {
      if (obj.hasOwnProperty(objProp)) {
        res.push(objProp + ': ' + obj[objProp]);
      }
    }

    return res;
  }
};
