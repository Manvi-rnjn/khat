const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

let heartInterval = null;

const noGifs = [
  "sadcat1.jpg",
  "sadcat2.webp",
  "sadcat3.webp",
  "sadcat4.webp"
];

let noGifIndex = 0;



envelope.addEventListener("click",() => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout ( ()=> {
        document.querySelector(".letter-window").classList.add("open");

    },50);
});

noBtn.addEventListener("click",()=>{
    const min = 200;
    const max = 200;

    catImg.src = noGifs[noGifIndex];

    noGifIndex = (noGifIndex + 1) % noGifs.length;


    const dist = Math.random() * (max-min) + min;
    const angle = Math.random() * Math.PI *2;

    const moveX = Math.cos(angle) * dist;
    const moveY = Math.sin(angle) * dist;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click",()=> {
    noGifIndex = 0;

    title.textContent = "Yayyyyayayy";

    catImg.src = "catdance.webp";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    const giftBox = document.getElementById("gift-box");
    giftBox.style.display = "block";


    heartInterval = setInterval(spawnHeart, 200);

});

function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2.5 + Math.random() * 2) + "s";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

const giftBox = document.getElementById("gift-box");
const giftVideo = document.getElementById("gift-video");

giftBox.addEventListener("click", () => {

    // STOP HEARTS
    if (heartInterval) {
        clearInterval(heartInterval);
        heartInterval = null;
    }

    // hide gift box
    giftBox.style.display = "none";

    // fade background
    document.getElementById("app").classList.add("fade");


    // show video
    giftVideo.style.display = "block";

    // force reflow so transition works
    giftVideo.getBoundingClientRect();

    // animate video in
    giftVideo.classList.add("show");

    giftVideo.play();

    document.getElementById("vignette").classList.add("show");

});









