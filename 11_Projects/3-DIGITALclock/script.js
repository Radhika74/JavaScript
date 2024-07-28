const clock = document.getElementById('clock');

function padZero(number) {
  return number.toString().padStart(2, '0');
}

setInterval(function() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

  clock.textContent = formattedTime;
}, 1000);
