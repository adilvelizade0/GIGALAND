document.querySelector(".headerSwiper").addEventListener("mouseover", () => {
  document.querySelector(".header-swiper-button-prev").style.opacity = "1";
  document.querySelector(".header-swiper-button-next").style.opacity = "1";
});

document.querySelector(".headerSwiper").addEventListener("mouseout", () => {
  document.querySelector(".header-swiper-button-prev").style.opacity = "0";
  document.querySelector(".header-swiper-button-next").style.opacity = "0";
});
