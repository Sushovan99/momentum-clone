const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const imgElement = document.createElement("img");

imgElement.src = `./img/${randomImg}`;

document.body.appendChild(imgElement);
