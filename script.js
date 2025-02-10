const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const calendar = document.getElementById('calendar');
const datePicker = document.getElementById('date-picker');
const finalMessage = document.getElementById('final-message');
const selectedDate = document.getElementById('selected-date');
const music = document.getElementById('background-music');

let noCount = 0;
const messages = [
  "Wrong answer! You have 3 lives left.",
  "Congratulations! You just won another attempt! Try again 😜",
  "Are you sure? What if this is an IPO for a lifetime partnership? You might regret missing it later! 📈❤️",
  "Come on, we’ve judged people together in Domino’s, and you still doubt our compatibility? 😤",
  "Okay fine, you’re really stubborn… but you have no choice. Just pick a date! 😏"
];

noBtn.addEventListener('click', () => {
  noCount++;
  if (noCount < messages.length) {
    alert(messages[noCount - 1]);
    moveButton();
  } else {
    calendar.classList.remove('hidden');
  }
});

yesBtn.addEventListener('click', () => {
  finalMessage.classList.remove('hidden');
  calendar.classList.add('hidden');
  selectedDate.textContent = new Date().toLocaleDateString();
});

datePicker.addEventListener('change', () => {
  finalMessage.classList.remove('hidden');
  selectedDate.textContent = datePicker.value;
});

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Play background music
music.play();
