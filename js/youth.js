// javascript for the time countdown
let Event = document.querySelector(".upcoming-event .event");

//specific date
const targetDate = new Date("2024-12-15T12:20:00");

function updateCountDown() {
  let now = new Date();
  let timeDifference = targetDate - now;

  //calculating the remaining date and time
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //dispaly the current time
  Event.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  if (timeDifference <= 0) {
    clearInterval(timer);
    Event.textContent = `Event has ended`;
  }
}

updateCountDown();
const timer = setInterval(updateCountDown, 1000);
