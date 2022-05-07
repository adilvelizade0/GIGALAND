"use strict";

document.querySelector(".mySwiper").addEventListener("mouseover", function () {
  document.querySelector(".swiper-button-prev").style.opacity = "1";
  document.querySelector(".swiper-button-next").style.opacity = "1";
});
document.querySelector(".mySwiper").addEventListener("mouseout", function () {
  document.querySelector(".swiper-button-prev").style.opacity = "0";
  document.querySelector(".swiper-button-next").style.opacity = "0";
});