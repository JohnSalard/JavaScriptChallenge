(() => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2020 23:59:59").getTime();
    const unixTime = newYear - now;

    setElementInnerText("days", Math.floor(unixTime / day));
    setElementInnerText("hours", Math.floor((unixTime % day) / hour));
    setElementInnerText("minutes", Math.floor((unixTime % hour) / minute));
    setElementInnerText("seconds", Math.floor((unixTime % minute) / second));
  }
  function run() {
    setInterval(() => {
      countDown();
    }, second);
  }
  run();
})();
