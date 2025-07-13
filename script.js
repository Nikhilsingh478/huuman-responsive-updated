Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.4634994206257241 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.25, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4.53, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.7, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.18, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.53, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 1725 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const nright = document.getElementById("nright");

  menuBtn.addEventListener("click", () => {
    nright.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    nright.classList.remove("active");
  });
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 0.65,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1.2,
      });
    }
  });
});

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 5500);

// script for cursor starts
var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var bubblesContainer = document.querySelector(".bubbles");

body.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.2,
  });

  createBubble(event.clientX, event.clientY);
});

function createBubble(x, y) {
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubblesContainer.appendChild(bubble);

  gsap.set(bubble, {
    x: x - bubble.clientWidth / 2,
    y: y - bubble.clientHeight / 2,
  });

  gsap.to(bubble, {
    x: x + (Math.random() - 0.5) * 100,
    y: y + (Math.random() - 0.5) * 100,
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
    onComplete: function () {
      bubble.remove();
    },
  });
}

// cursor script ends

// script for review section
// script for review section
const track = document.getElementById("carousel-track");
const speed = 0.5; // px per frame (adjust for faster/slower scroll)

// Clone all children for a seamless loop
const cards = Array.from(track.children);
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let pos = 0;

function animate() {
  pos -= speed;
  // Reset when we’ve scrolled past half (since we duplicated everything)
  if (Math.abs(pos) >= track.scrollWidth / 2) {
    pos = 0;
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}

animate();

