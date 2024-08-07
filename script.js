var drawCount = 0;
var loseCount = 0;
var winCount = 0;

function numberGenerator(){
    return Math.floor(Math.random() * 3) + 1;
}

function visibleOn(){
    document.querySelector('.choice').style.visibility = 'visible';
}
function visible(){
    document.querySelector('.choice').style.visibility = 'hidden';
    setTimeout(visibleOn, 1850);
}

function toSee(){
    document.querySelector('.toHide').style.visibility = 'visible';
}
function toHide(){
    document.querySelector('.toHide').style.visibility = 'hidden';
    setTimeout(toSee, 1850);
}


function handleButtonClick1() {
    var element = document.querySelector('.b1');
    element = 1;
    const generatedNumber = numberGenerator();
    if(generatedNumber === element){
        textDrawShow();
        drawCount++;
        document.querySelector('.draw').innerHTML = drawCount;
        visible();
        toHide();
        botChoice1();
    } else if(generatedNumber === 2){
        textLoseShow();
        loseCount++;
        document.querySelector('.lose').innerHTML = loseCount;
        visible();
        toHide();
        botChoice2();
    } else if(generatedNumber === 3){
        textWinShow();
        winCount++;
        document.querySelector('.win').innerHTML = winCount;
        visible();
        toHide();
        botChoice3();
    } 
    after1();
}
function handleButtonClick2() {
    var element = document.querySelector('.b2');
    element = 2;
    const generatedNumber = numberGenerator();
    if(generatedNumber === element){
        textDrawShow();
        drawCount++;
        document.querySelector('.draw').innerHTML = drawCount;
        visible();
        toHide();
        botChoice2();
    } else if(generatedNumber === 3){
        textLoseShow();
        loseCount++;
        document.querySelector('.lose').innerHTML = loseCount;
        visible();
        toHide();
        botChoice3();
    } else if(generatedNumber === 1){
        textWinShow();
        winCount++;
        document.querySelector('.win').innerHTML = winCount;
        visible();
        toHide();
        botChoice1();
    } 
    after2();
}
function handleButtonClick3() {
    var element = document.querySelector('.b3');
    element = 3;
    const generatedNumber = numberGenerator();
    if(generatedNumber === element){
        textDrawShow();
        drawCount++;
        document.querySelector('.draw').innerHTML = drawCount;
        visible();
        toHide();
        botChoice3();
    } else if(generatedNumber === 1){
        textLoseShow();
        loseCount++;
        document.querySelector('.lose').innerHTML = loseCount;
        visible();
        toHide();
        botChoice1();
    } else if(generatedNumber === 2){
        textWinShow();
        winCount++;
        document.querySelector('.win').innerHTML = winCount;
        visible();
        toHide();
        botChoice2();
    } 
    after3();
}


function after1(){
    document.querySelector('.unu').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.unu').style.visibility = 'hidden';}, 1850);
}
function after2(){
    document.querySelector('.doi').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.doi').style.visibility = 'hidden';}, 1850);
}
function after3(){
    document.querySelector('.trei').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.trei').style.visibility = 'hidden';}, 1850);
}

function textWinShow(){
    document.querySelector('.after1').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.after1').style.visibility = 'hidden';}, 1850);
}
function textLoseShow(){
    document.querySelector('.after2').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.after2').style.visibility = 'hidden';}, 1850);
}
function textDrawShow(){
    document.querySelector('.after3').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.after3').style.visibility = 'hidden';}, 1850);
}

function botChoice1(){
    document.querySelector('.choice1').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.choice1').style.visibility = 'hidden';}, 1850);
}
function botChoice2(){
    document.querySelector('.choice2').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.choice2').style.visibility = 'hidden';}, 1850);
}
function botChoice3(){
    document.querySelector('.choice3').style.visibility = 'visible';
    setTimeout(function(){
        document.querySelector('.choice3').style.visibility = 'hidden';}, 1850);
}
