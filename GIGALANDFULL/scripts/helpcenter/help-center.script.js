setTimeout(() => {
  document.querySelector(".anime-loader").style.display = "none";
  document.body.style.animation = "none";
  document.querySelector("#help-center--container").classList.remove("d-none");
}, 5000);

document.querySelector(".footerLogo").addEventListener("mouseover", () => {
  document.querySelector(".dissapearHover").style.color = "#0d0c22";
});
document.querySelector(".footerLogo").addEventListener("mouseout", () => {
  document.querySelector(".dissapearHover").style.color = "#fff";
});
