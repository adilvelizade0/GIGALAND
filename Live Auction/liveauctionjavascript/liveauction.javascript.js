function countDown(idName, maxDate) {
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = maxDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(idName).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(idName).innerHTML = "EXPIRED";
        }
    }, 1000);
}

let pinkyOceanDate = new Date("Jun 17, 2022 18:37:25").getTime();
countDown("pinkyOceanCountdown", pinkyOceanDate);

let rainbowStyleDate = new Date("Jun 14, 2022 23:17:43").getTime();
countDown("rainbowStyleCountdown", rainbowStyleDate);

let runningPuppetsDate = new Date("Jun 7, 2022 02:07:29").getTime();
countDown("runningPuppetsCountdown", runningPuppetsDate);

let loopDonutDate = new Date("Jun 9, 2022 12:09:12").getTime();
countDown("loopDonutCountdown", loopDonutDate);

let ladyCopterDate = new Date("Jun 17, 2022 10:10:10").getTime();
countDown("ladyCopterCountdown", ladyCopterDate);

let ohYeahDate = new Date("Jun 17, 2022 02:02:57").getTime();
countDown("ohYeahCountdown", ohYeahDate);

let sunnyDayDate = new Date("Jun 7, 2022 04:15:32").getTime();
countDown("sunnyDayCountdown", sunnyDayDate);

let finallyFreeDate = new Date("Jun 13, 2022 23:13:24").getTime();
countDown("finallyFreeCountdown", finallyFreeDate);

document.querySelector("nft__item_like").addEventListener("click", () => {
    if (document.querySelector("nft__item_like").childNodes[2].textContent === "50") {
        document.querySelector("nft__item_like").childNodes[2].textContent = "51";
        document.querySelector("nft__item_like").childNodes[1].style.color = "#EC7498";
    } else {
        document.querySelector("nft__item_like").childNodes[2].textContent = "50";
        document.querySelector("nft__item_like").childNodes[1].style.color = "#808080";
    }
});