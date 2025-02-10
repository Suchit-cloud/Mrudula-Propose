document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const message = document.getElementById("message");
    const calendarContainer = document.getElementById("calendar-container");
    const datePicker = document.getElementById("date-picker");
    const music = document.getElementById("background-music");

    let noClickCount = 0;
    let noMessages = [
        "Wait... Did you just click NO? 😳",
        "Think about our **IPO Partnership**! 📈 We can't break it like this! 💔",
        "Who else will drink **hot chocolate** with you while judging people? ☕🤭",
        "Oh, so you're choosing **No**? Great, now I'm keeping all the **food** to myself. 🍕😏",
        "Are you really going to reject the **CEO of Chimani Industries?** 🐥💼",
        "Fine, fine. If you're this stubborn, then **pick a date!** 🗓️"
    ];

    // Play music when page loads
    music.play().catch(() => console.log("User interaction needed to play music."));

    yesButton.addEventListener("click", function () {
        message.innerHTML = "Yay! You made the right choice! 🎉💖";
        calendarContainer.style.display = "none"; // Hide calendar if shown
    });

    noButton.addEventListener("click", function () {
        if (noClickCount < noMessages.length - 1) {
            message.innerHTML = noMessages[noClickCount];
            moveButton(noButton);
        } else {
            message.innerHTML = noMessages[noClickCount];
            calendarContainer.style.display = "block";
        }
        noClickCount++;
    });

    function moveButton(button) {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);
        button.style.position = "absolute";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
});
