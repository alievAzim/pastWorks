const phrases = [
  "Connecting...",
  "1 second...",
  "Hello,check out my works",
  "Because i did it without designers",
  "and i need your advices",
  "Pleasant viewing :)",
];
const el = document.querySelector(".text");
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

next();
