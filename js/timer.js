const countDownDate = new Date("March 5, 2023 11:00:00").getTime();

let x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  0 <= days && days < 10? document.getElementById('days').innerHTML = 
  "0" + days : document.getElementById('days').innerHTML = days;
  
  0 <= hours && hours < 10? document.getElementById('hours').innerHTML =
  "0" + hours : document.getElementById('hours').innerHTML = hours;
  
  0 <= minutes && minutes < 10? document.getElementById('minutes').innerHTML = 
  "0" + minutes : document.getElementById('minutes').innerHTML = minutes;
  
  0 <= seconds && seconds < 10? document.getElementById('seconds').innerHTML = 
  "0" + seconds : document.getElementById('seconds').innerHTML = seconds; 
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
  }
}, 1000);