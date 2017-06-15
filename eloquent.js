Eloquent JavaScript
Chapter: 3 Functions

ex.Minimum

function min(x, y) {
  if (x < y)
    return x;
  else
    return y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

ex.Recursion

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

ex. Bean counting

function countBs (string) {
  var count = 0;
  for (var i=0; i < string.length; i++) {
  if (string.charAt(i) == "B") {
    count++;
  }
  }
    return count;
  }

function countChar (string, char) {
  var count = 0;
  for (var i=0; i < string.length; i++) {
  if (string.charAt(i) == char) {
    count++;
  }
  }
    return count;
  }
