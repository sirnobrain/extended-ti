/*
* WHAT IS THE OUTPUT ?
*/
function isItTrue() {
  var sum = 0.1 + 0.2

  console.log(sum == 0.3)
  console.log(sum === 0.3)
}

isItTrue()

/*
* WHAT IS THE OUTPUT ?
*/
function logIt() {
  setTimeout(function() {
    console.log('Hello')
  }, 0)

  console.log('World')
};

logIt();

/*
* WHAT IS THE OUTPUT ?
*/
var text = 'Hello';
function logMe(){
    console.log(text);
    var text = 'World';
};

logMe();

/*
* WHAT IS THE OUTPUT ?
*/
const arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}