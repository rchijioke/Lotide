const assertEqual = require('./assertEqual');
  

   const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
   // const tail = (array) => {
   //    if (array.length <= 1) {
   //      return [ '' ];
   //    } else {
   //      return array.slice(1);
   //    }
   //  }
   
   
   module.exports = tail;

