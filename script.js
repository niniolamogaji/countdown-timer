function updateCountdown() {
    const targetDate = new Date("2024-04-01T00:00:00"); // Set your target date and time here
    const currentDate = new Date();
    const difference = targetDate - currentDate;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  