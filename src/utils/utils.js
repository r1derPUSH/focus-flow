function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

export function formatTime(time) {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

export function getTime(time) {
  const hours = time.getHours();
  return hours;
}
