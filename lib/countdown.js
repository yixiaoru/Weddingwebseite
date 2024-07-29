const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Oct 19, 2024 13:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector(".parts__paragraph_day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".parts__paragraph_hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".parts__paragraph_minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".parts__paragraph_second").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  // should use 500 as setInterval won't always run on time.
  setInterval(countdown, 500);