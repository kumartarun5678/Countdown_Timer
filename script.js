// Set the date and time for the countdown

const countdownDate = new Date("2023-07-20T13:23:59").getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();
  
  // Calculate the time remaining
  const timeRemaining = countdownDate - now;
  
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
  // Display the countdown
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
  // If the countdown is over, display a message
  if (timeRemaining <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "Countdown is over!";
  }
}, 1000);
