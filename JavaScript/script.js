const images = [
  "/Images/slide1.jpg",
  "/Images/slide2.jpg",
  "/Images/slide3.jpg",
  "/Images/slide4.jpg",
  "/Images/slide5.jpg",
  "/Images/slide6.jpg",
  "/Images/slide7.jpg",
];

window.setInterval(changePicture, 3000);
let i = 0;
function changePicture() {
  if (i > images.length - 1) {
    i = 0;
  }
  document.getElementById("fading-image").src=images[i];
  i++;
  
}

window.onload = function (){
    increaseNumberAnimation("community",3500);
    increaseNumberAnimation("events",1535);
    increaseNumberAnimation("orgs",1535);
    increaseNumberAnimation("industries",60);
}
function increaseNumberAnimation(elementId, endNumber, speed = 5) {
    const element = document.getElementById(elementId)
    
    if(!element) return
    
    /* A dataset variable that is added to the animated element*/
    const animationRunning = JSON.parse(element.dataset.animationRunning ?? false)
    
    if(animationRunning) return
    
    element.dataset.animationRunning = true
    
    incNbrRec(0, endNumber, element, speed)
  }
  
  /*A recursive function to increase the number.*/
  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber
      setTimeout(function() {
        incNbrRec(currentNumber + 1, endNumber, element, speed)
      }, speed) //Delay a bit before calling the function again.
    } else {
        let temp =element.innerHTML;
        element.innerHTML = temp + "+";
      element.dataset.animationRunning = false
    }
  }
