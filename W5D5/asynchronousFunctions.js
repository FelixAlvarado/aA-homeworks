function hammer() {
  alert('HAMMERTIME');
}
window.setTimeout(hammer, 5000);

function hammerTIme(time) {
  window.setTimeout(alert(`${time} is HAMMERTIME`), time);
}
