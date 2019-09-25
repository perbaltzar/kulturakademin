const displayProperTime = duration => {
  let seconds = Math.floor(duration / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let time = `${minutes}:${seconds}`;
  return time;
};

export default displayProperTime;
