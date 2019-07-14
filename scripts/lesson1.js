var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.jpg') {
      myImage.setAttribute ('src','images/robot.jpg');
    } else {
      myImage.setAttribute ('src','images/mozilla.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}