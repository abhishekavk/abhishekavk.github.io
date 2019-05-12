var myHeading = document.getElementById('abc');
myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/html-img1.jpeg') {
      myImage.setAttribute ('src','images/Flix_Hero-Image_2019-April_EU_DOUBLE.jpg');
    } else {
      myImage.setAttribute ('src','images/html-img1.jpeg');
    }
}
var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}