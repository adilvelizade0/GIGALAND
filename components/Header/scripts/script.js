document.querySelector(".mySwiper").addEventListener("mouseover", () => {
  document.querySelector(".swiper-button-prev").style.opacity = "1";
  document.querySelector(".swiper-button-next").style.opacity = "1";
});

document.querySelector(".mySwiper").addEventListener("mouseout", () => {
  document.querySelector(".swiper-button-prev").style.opacity = "0";
  document.querySelector(".swiper-button-next").style.opacity = "0";
});
