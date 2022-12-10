/*
Exercise:
function that returns the longer of two values. To do this, we need a length property that’s a number. 
Modify the function to use generic types
*/
function longest(a, b) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  console.log(longerArray);
  // longerString is of type 'Anna' | 'Patrick'
  const longerString = longest("Anna", "Patrick");
  console.log(longerString);
  // Error! Numbers don't have a 'length' property
//   const notOK = longest(10, 100);