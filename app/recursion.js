exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var res = [];

    function processDir( fileArray, fileDirName ) {
      if ( fileArray == null )return;

      for( var i = 0 ; i < fileArray.length; i++ ) {

        if( typeof fileArray[i] === 'string' ){
          if(dirName === undefined ){
            res.push(fileArray[i]);
          }
          if( dirName !== undefined && fileDirName === dirName){
            res.push(fileArray[i]);
          }

        } else {
          processDir( fileArray[i] )
        }
      }

      processDir(fileArray.files, fileArray.dir);
    }

    processDir(data.files);

    return res;

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    function fib(n) {
      if (n === 1 || n === 2 )
        return 1;
      else if( n===0)
          return 0;
      else
        return fib(n - 1) + fib(n - 2);
    }


    return fib(n);
  },

  validParentheses: function(n) {
    function allCombs(n) {
      if (n == 0)
        return [""];

      var result = [];
      for (var i = 0; i < n; ++i) {

        var lefts = allCombs(i);
        var rights = allCombs(n - i - 1);

        for (var l = 0; l < lefts.length; ++l)
          for (var r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }

      return result;
    }

    return allCombs(n);
  }
};
