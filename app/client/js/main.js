const updateNovosibirskTime = () => {
  const options = {
    timeZone: "Asia/Novosibirsk",
    hour: "2-digit",
    minute: "2-digit",
  };

  const now = new Date();
  const timeString = now.toLocaleTimeString("ru-RU", options);

  document.getElementById("time").textContent = `${timeString}`;
};

document.addEventListener("DOMContentLoaded", () => {
  // Setup novosibirsk time
  setInterval(updateNovosibirskTime, 60000);
  updateNovosibirskTime();
});
