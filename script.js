//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTime() {
  const now = new Date();
  timer.textContent = now.toLocaleString();
}

// Run immediately when page loads
updateTime();

// Update every 1000ms (1 second)
setInterval(updateTime, 1000);