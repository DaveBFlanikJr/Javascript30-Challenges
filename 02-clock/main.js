const secondHand = document.querySelector('.second-hand');
  const minutesHand = document.querySelector('.minute-hand');
  const hoursHand = document.querySelector('.hour-hand');
  const allHands = document.querySelectorAll('.hand');

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // First grab the seconds then divide by 60 to get percentage.. Then multiply by 360 so the clock can rotate 1 degree every second
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mintues = now.getMinutes();
    const mintuesDegrees = ((mintues / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${mintuesDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = ((mintues / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondsDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none')
    } else {
      allHands.forEach(hand => hand.style.transition = '')
    }
  }
  setInterval(setDate, 1000);
