const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const icon = document.querySelector('.icon');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
  .fromTo(slider, 1.5, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut }, "-=1")
  .fromTo(logo, 1, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=0.4")
  .fromTo(icon, 1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "-=1")
  .fromTo(headline, 1, { opacity: 0, x: -100 }, { opacity: 1, x: -0 }, "-=1")
