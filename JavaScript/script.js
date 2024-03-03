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
