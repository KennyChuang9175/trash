var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello pro dog!"
setUserName();
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog1.jpg') {
      myImage.setAttribute ('src','images/dog2.jpg');
    } else {
      myImage.setAttribute ('src','images/dog1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('你喜歡小吉嗎? love/hate');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'I ' + myName+' this pro dog';
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'I ' + storedName+ ' this pro dog' ;
}
myButton.onclick = function() {
  setUserName();
}