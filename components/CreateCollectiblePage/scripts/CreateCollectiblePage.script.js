const selectMethods = document.querySelectorAll(".de_nav--li");
const tabOpt1 = document.querySelector("#tab_opt_1");
const tabOpt2 = document.querySelector("#tab_opt_2");
const tabOpt3 = document.querySelector("#tab_opt_3");

selectMethods.forEach((list, index) => {
  list.addEventListener("click", () => {
    selectMethods.forEach((li) => {
      li.classList.remove("active");
    });
    list.classList.add("active");
    console.log(index);

    if (index === 0) {
      tabOpt2.classList.remove("tab_opt_active");
      tabOpt3.classList.remove("tab_opt_active");
      tabOpt1.classList.add("tab_opt_active");
    } else if (index === 1) {
      tabOpt1.classList.remove("tab_opt_active");
      tabOpt3.classList.remove("tab_opt_active");
      tabOpt2.classList.add("tab_opt_active");
    } else {
      tabOpt1.classList.remove("tab_opt_active");
      tabOpt2.classList.remove("tab_opt_active");
      tabOpt3.classList.add("tab_opt_active");
    }
  });
});

document
  .querySelector(".nft__item_like")
  .childNodes[1].addEventListener("click", () => {
    if (
      document.querySelector(".nft__item_like").childNodes[2].textContent ===
      "50"
    ) {
      document.querySelector(".nft__item_like").childNodes[2].textContent =
        "51";
      document.querySelector(".nft__item_like").childNodes[1].style.color =
        "#EC7498";
    } else {
      document.querySelector(".nft__item_like").childNodes[2].textContent =
        "50";
      document.querySelector(".nft__item_like").childNodes[1].style.color =
        "#808080";
    }
  });

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + "m " + seconds + "s";

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let fiveMinutes = 60 * 5,
    display = document.querySelector(".countdown-area");
  startTimer(fiveMinutes, display);
};

document.querySelector(".footerLogo").addEventListener("mouseover", () => {
  document.querySelector(".dissapearHover").style.color = "#0d0c22";
});
document.querySelector(".footerLogo").addEventListener("mouseout", () => {
  document.querySelector(".dissapearHover").style.color = "#fff";
});
