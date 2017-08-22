let timeLeft;
let ticker;
let endTime;
let lastTick;

function formatSeconds(num){
    const minutes = seconds / 60;
}

function tick(){
    const elapsedSeconds = Math.round((Date.now() - lastTick) / 1000);
    
    timeLeft = timeLeft - elapsedSeconds;

    lastTick = Date.now();

    if(timeLeft <= 0) {
        clearInterval(ticker);
    }

    updateDisplay();
};

function updateDisplay(){
    displayTimeLeft.textContent = timeLeft;
    displayEndTime.textContent = endTime;
}

function timer(amount){
    if(ticker) clearInterval(ticker);

    timeLeft = amount;

    endTime = new Date(Date.now() + (amount * 1000));
    lastTick = Date.now();    

    tick();
    ticker = setInterval(tick, 1000);
};

function handleTimerButttonClick(event){
   const duration = this.dataset.time;
   timer(duration);
}

const buttons = document.querySelectorAll('button.timer__button');
buttons.forEach((el) => el.addEventListener('click', handleTimerButttonClick));

const displayTimeLeft = document.querySelector('.display > .display__time-left');
const displayEndTime = document.querySelector('.display > .display__end-time');

