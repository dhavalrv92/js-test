exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for( var i = 0; i < arr.length; i++ ){
      if( arr[i] === item )
          return i
    }
    return -1;
  },

  sum: function(arr) {
    var sum =  0;
    for( var i = 0; i < arr.length; i++ ){
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var res = []
    for( var i = 0; i < arr.length; i++ ){
      if(arr[i] !== item)
        res.push(arr[i])
    }
    return res;
  },

  removeWithoutCopy: function(arr, item) {
    for( var i = 0; i < arr.length; i++ ){
      if(arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for( var i = 0; i < arr.length; i++ ) {
      if(arr[i] === item)
          count++;
    }
    return count;
  },

  duplicates: function(arr) {

    arr.sort();
    var res = [];
    var i = 0;
    while( i < arr.length - 1 ){
      if( arr[i+1] == arr[i]) {
        res.push(arr[i]);
        while(arr[i+1] === arr[i]){
          i++;
        }
      } else {
        i++;
      }
    }
    return res;
  },

  square: function(arr) {
    for( var i = 0; i < arr.length; i ++ ) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var res = [];
    for( var i = 0; i < arr.length; i ++ ) {
      if( arr[i] === target)
          res.push(i);
    }
    return res;
  }
};
