/* If we execute this JavaScript, what will the
browser's console show */

var text = 'outside';
function logIt() {
  console.log(text)
  var text = 'inside';
};
logIt();

/*
logs 'undefined'

this is what the function is actually doing

var text = 'outside';
function logIt() {
  var text;
  console.log(text);
  text = 'inside';
}
logIt()

1. The var declaration gets hoisted to the top of the scope
2. The assignment stays after the console.log making it undefined
