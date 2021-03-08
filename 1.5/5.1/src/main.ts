import * as moment from 'moment';
import sayHello from './greet';

function startTimerCount(minutesCountFromUser: HTMLElement, startBtn: HTMLElement) {
  minutesCountFromUser.contentEditable = 'false';
  (<HTMLInputElement>startBtn).disabled = true;

  let minutes = Number(minutesCountFromUser.innerHTML);
  let duration: moment.Duration = moment.duration({ minutes });

  const timer: number = setInterval(() => {
    duration = moment.duration(duration.asSeconds() - 1, 'seconds');
    minutes = duration.minutes();
    let sec: number = duration.seconds();

    const secondsAsString: string = sec < 10 ? `0${sec}` : String(sec);
    minutesCountFromUser.innerText = `${minutes}:${secondsAsString}`;

    if (minutes === 0 && sec === 0) {
      // stopTimer
      clearInterval(timer);
      (<HTMLInputElement>startBtn).disabled = false;
      minutesCountFromUser.contentEditable = 'true';
    }
    if (sec < 0 && minutes !== 0) {
      minutes -= 1;
      sec = 59;
    }
  }, 1000);
}

function handleTimerStartBtn(
  minutesCountFromUser: HTMLElement,
  warningBtn: HTMLElement,
  startBtn: HTMLElement
) {
  const containsOnlyNumbers: boolean = /^[1-9]+$/.test(minutesCountFromUser.innerHTML);

  if (containsOnlyNumbers) {
    warningBtn.style.display = 'none';
    startTimerCount(minutesCountFromUser, startBtn);
  } else {
    warningBtn.style.display = 'block';
  }
}

const minutesCountFromUser: HTMLElement = document.querySelector('#minInput');
minutesCountFromUser.contentEditable = 'true';

const warningBtn: HTMLElement = document.querySelector('#warning');

const startBtn: HTMLElement = document.querySelector('#startBtn');
startBtn.addEventListener('click', () => {
  handleTimerStartBtn(minutesCountFromUser, warningBtn, startBtn);
});

console.log(sayHello('Typescript=))'));
