const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDeg = (seconds / 60) * 360 - 90;
  secHand.style.transform = `rotate(${secondDeg}deg)`;

  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 - 90;
  minHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 - 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
};

setInterval(setDate, 1000);

setDate();
