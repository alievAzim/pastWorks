var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
tl.set(".word.in, .word.too, .word.deep", { opacity: 0 });

const bgColor = "hsl(190, 100%, 75%)";

// Lines
tl.fromTo(
".bottom-side",
{
  width: 0,
  background: bgColor,
  immediateRender: false,
  autoRound: false },

{
  duration: 1.7,
  width: "100%",
  background: bgColor });


tl.fromTo(
".left-side",
{
  height: 0,
  background: bgColor,
  immediateRender: false,
  autoRound: false },

{
  duration: 1.7,
  height: "100%",
  background: bgColor,
  delay: -1.7 });



// TOO
tl.fromTo(
".text1 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: 0.6 });

tl.fromTo(
".text2 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.3 });

tl.fromTo(
".text3 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text4 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text5 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text6 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text7 .word.in",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });


// TOO
tl.fromTo(".text1 .word.too", { opacity: 0 }, { duration: 0.5, opacity: 1 });
tl.fromTo(
".text2 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.3 });

tl.fromTo(
".text3 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text4 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text5 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text6 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text7 .word.too",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });


// DEEP

tl.fromTo(".text1 .word.deep", { opacity: 0 }, { duration: 0.5, opacity: 1 });

tl.fromTo(
".text2 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.3 });

tl.fromTo(
".text3 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text4 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text5 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text6 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });

tl.fromTo(
".text7 .word.deep",
{ opacity: 0 },
{ duration: 1.3, opacity: 1, delay: -1.2 });


// Rotate
tl.to(".text", 1, { transform: "rotate(-20deg) skew(0deg, 0deg)", delay: 0.5 });

// Fade Out
tl.to(".text1, .text2", 0.6, { opacity: 0, delay: 1.2 });
tl.to(".text3", 0.6, { opacity: 0, delay: -0.5 });
tl.to(".text4", 0.6, { opacity: 0, delay: -0.5 });
tl.to(".text5", 0.6, { opacity: 0, delay: -0.5 });
tl.to(".text6", 0.6, { opacity: 0, delay: -0.5 });
tl.to(".text7", 0.6, { opacity: 0, delay: -0.5 });