const vovaeblan = document.getElementById("vovaeblan");
vovaeblan.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("vovaeblan");
});

const vovaeblanBtn = document.getElementById("vovaeblanBtn");

vovaeblanBtn.addEventListener("click", (e) => {
  console.log(document.getElementById("password").value);
  console.log(document.getElementById("login").value);
});
