document.addEventListener("DOMContentLoaded", function() {
    const noButtons = document.querySelectorAll("#no1, #no2");
    const yesButton = document.getElementById("yes");
    const message = document.getElementById("message");

    noButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.left = `${Math.random() * window.innerWidth}px`;
            button.style.top = `${Math.random() * window.innerHeight}px`;
        });
    });

    yesButton.addEventListener("click", function() {
        message.innerHTML = "Yay! Now pick a date!";
        // Open calendar (you can add date selection logic here)
    });
});
