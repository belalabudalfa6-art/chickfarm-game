let energy = 100;
let hunger = 100;
let points = 0;
let stage = 1; // مراحله 1-5

const loginScreen = document.getElementById("login-screen");
const farmScreen = document.getElementById("farm-screen");
const usernameInput = document.getElementById("username");
const pipoImg = document.getElementById("pipo-img");
const energyEl = document.getElementById("energy");
const hungerEl = document.getElementById("hunger");
const pointsEl = document.getElementById("points");

document.getElementById("new-player-btn").addEventListener("click", () => {
  if(usernameInput.value.trim() === "") { alert("اكتب اسمك أولاً!"); return; }
  loginScreen.classList.remove("active");
  farmScreen.classList.add("active");
  alert("مرحبا " + usernameInput.value + "! هيا لنعتني ببيبو 🐣");
});

document.getElementById("feed-btn").addEventListener("click", () => {
  if(hunger >= 100) { alert("بيبو مشبع!"); return; }
  hunger += 20;
  if(hunger > 100) hunger = 100;
  points += 5;
  pointsEl.textContent = points;
  hungerEl.textContent = hunger;

  // تحديث مرحلة بيبو كل 20 نقطة
  if(points >= 20 && stage === 1) { stage = 2; pipoImg.src = "assets/pipo_stage2.png"; }
  if(points >= 40 && stage === 2) { stage = 3; pipoImg.src = "assets/pipo_stage3.png"; }
  if(points >= 60 && stage === 3) { stage = 4; pipoImg.src = "assets/pipo_stage4.png"; }
  if(points >= 80 && stage === 4) { stage = 5; pipoImg.src = "assets/pipo_stage5.png"; }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  farmScreen.classList.remove("active");
  loginScreen.classList.add("active");
  energy = 100; hunger = 100; points = 0; stage = 1;
  pipoImg.src = "assets/pipo_stage1.png";
  energyEl.textContent = energy;
  hungerEl.textContent = hunger;
  pointsEl.textContent = points;
});
