const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const message = document.getElementById("response-message");
const calendar = document.getElementById("calendar-container");
const datePicker = document.getElementById("date-picker");
const music = document.getElementById("background-music");

let noClickCount = 0;
const messages = [
    "Wrong choice! Try again!",
    "Are you sure? Think again!",
    "This is your last chance!",
    "Fine, pick a date then!"
];

noBtn.addEventListener("click", () => {
    if (noClickCount < messages.length - 1) {
        message.textContent = messages[noClickCount];
        noClickCount++;
    } else {
        message.textContent = "";
        calendar.classList.remove("hidden");
    }
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Yay! Best decision ever! 🎉";
    music.play();
});

datePicker.addEventListener("change", () => {
    message.textContent = `Great! Our special day is set for ${datePicker.value}! ❤️`;
});
