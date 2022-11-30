const hour = document.querySelector("[data-hour-hand]");
const minute = document.querySelector("[data-minutes-hand]");
const seconds = document.querySelector("[data-seconds-hand]");
const body = document.getElementsByTagName("body");
let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    const d = new Date();
    const mm = d.getMinutes();
    const ss = d.getSeconds();
    const hh = d.getHours();

    const hr = hh * 30 + mm / 2;
    const mr = mm * 6;
    const sr = ss * 6;

    setRotation(seconds, sr);
    setRotation(minute, mr);
    setRotation(hour, hr);

    const hue = parseFloat( getComputedStyle(document.documentElement).getPropertyValue(
      "--hue"
    ));
    document.documentElement.style.setProperty("--hue", hue+0.5 );
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

function setRotation(element, ratio) {
  element.style.setProperty("--rotation", ratio);
}
window.requestAnimationFrame(update);
update();
