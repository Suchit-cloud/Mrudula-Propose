const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const calendar = document.getElementById('calendar');
const datePicker = document.getElementById('date-picker');
const finalMessage = document.getElementById('final-message');

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
  finalMessage.innerHTML = `<h2>Yay! You just secured a lifetime partnership with the best shareholder (Me) 💍. Now, let’s finalize the merger agreement 😘.</h2>`;
});

datePicker.addEventListener('change', () => {
  const selectedDateValue = new Date(datePicker.value);
  const year = selectedDateValue.getFullYear();
  const month = selectedDateValue.getMonth() + 1; // Months are 0-indexed
  const day = selectedDateValue.getDate();

  let message = "";

  // Check for specific date conditions
  if (year < 2025 || (year === 2025 && month < 5)) {
    message = "So you wanna say yes while we’re still in the same city? I like the efficiency! 🤭";
  } else if (year === 2025 && month === 11) {
    message = "Wow, you’re planning to multitask? Say ‘Yes’ while solving FR papers? Impressive! 😂";
  } else if (year === 2026 && month === 1) {
    message = "Ohhh, so you wanna be a Chartered Accountant before you say Yes? AIR-ranged marriage planning, huh? 😆";
  } else if (month === 2 && day === 14) {
    message = "Aww, going traditional? But come on, we’re cooler than that! 😉";
  } else if (year > 2026) {
    message = getRandomFutureMessage();
    // Reset the calendar for future dates
    datePicker.value = "";
    calendar.classList.remove('hidden');
    finalMessage.classList.add('hidden');
    alert(message);
    return;
  } else {
    message = "Hmm, a long-distance ‘Yes’? That’s deep, Muduluuu! But are you sure?";
  }

  finalMessage.innerHTML = `<h2>${message}</h2>`;
  finalMessage.classList.remove('hidden');
});

function getRandomFutureMessage() {
  const futureMessages = [
    "Damn, Chimani! Planning for the future like a government budget? 😳 You want me to wait that long?!",
    "At this rate, even Google will forget the meaning of ‘Yes’ before you confirm! 😂",
    "By that time, AI will be so advanced, a robot might propose to me first! Should I wait or upgrade? 😆",
    "Chalo, let’s set a reminder: ‘Mrudula will say yes in 2028.’ Hope I still remember the password to this website! 🤭",
    "Okay okay, I get it! You love suspense. But let’s be a tiny bit realistic, Chimani! Try again. 😏"
  ];
  return futureMessages[Math.floor(Math.random() * futureMessages.length)];
}

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
// Play background music
const music = document.getElementById('background-music');
music.play();
const musicControl = document.getElementById('music-control');
const music = document.getElementById('background-music');

musicControl.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicControl.textContent = "🎵 Pause Music";
  } else {
    music.pause();
    musicControl.textContent = "🎵 Play Music";
  }
});
