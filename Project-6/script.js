const start = document.getElementById('start');
const stop = document.getElementById('stop');
let intervalId ;
function randomColor(){
    let hex = '123456789ABCDEF';
    let color = '#';
    for(i = 0 ; i < 6 ; i++ ){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color ;
}

function changeBackgroundColor(){
    document.body.style
    .backgroundColor = randomColor();
    const container = document.getElementById('container');
    container.style.backgroundColor = 'black';
    container.style.border = '4px solid white';
    document.querySelector('h2').style.color = 'blue';
    document.querySelector('#start').style.color = 'blue';
    document.querySelector('#stop').style.color = 'blue';
    // container.style.border = '4px solid blue';
}

function startChangingColor(){
    intervalId = setInterval(changeBackgroundColor,1000);
}

start.addEventListener('click',startChangingColor);

function stopChangingColor(){
    clearInterval(intervalId);
}

stop.addEventListener('click',stopChangingColor);