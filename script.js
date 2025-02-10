document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const calendarContainer = document.getElementById("calendarContainer");

    let noClickCount = 0;

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    noButton.addEventListener("click", function () {
        noClickCount++;

        if (noClickCount === 1) {
            message.innerText = "Mudulaaa, tuza uttar chuktay! 🐥🐣";
        } else if (noClickCount === 2) {
            message.innerText = "Arey, vichar kar na ekda parat! 😏";
        } else if (noClickCount === 3) {
            message.innerText = "Shevat cha chance ahe! 😬";
        } else if (noClickCount >= 4) {
            message.innerText = "Tikde kahi nahi ahe, shikasta swikartay ka? 😆";
            calendarContainer.style.display = "block";
            noButton.style.display = "none";
        }
    });

    yesButton.addEventListener("click", function () {
        message.innerText = "Yay! Malaa mahit hota tu hoch mhanash! 🥰🎉";
        calendarContainer.style.display = "none";
        noButton.style.display = "none";
    });
});
