const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS에서 html 요소 만들기 
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//body에 만든 요소 넣어주기 
document.body.appendChild(bgImage);
