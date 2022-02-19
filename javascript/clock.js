const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(
    date.getHours() > 12 ? date.getHours() % 12 : date.getHours()
  ).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Calling the function immediately for first time to prevent any delay
getClock();
setInterval(getClock, 1000);
