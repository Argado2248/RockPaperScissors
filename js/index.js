// const rock = 0;
// const paper = 1;
// const scissors = 2;

function userinput() {
    const promptInput = prompt('Skriv in "sten", "sax" eller "påse"');
    return promptInput;
}

const playerInput = userinput();
let playerChoice;
let pTranslate;

if (playerInput === 'sten'){
    playerChoice = 0;
    if (playerChoice === 0){
        pTranslate = 'sten';
    }
}
else if (playerInput === 'påse'){
    playerChoice = 1;
    if (playerChoice === 1){
        pTranslate = 'påse';
    }
}
else if (playerInput === 'sax'){
    playerChoice = 2;
    if (playerChoice === 2){
        pTranslate = 'sax';
    }
}

else {
    console.log('Du måste skriva "sten", "sax" eller "påse"');
}

function randomOutput() {
    let ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}

const machineChoice = randomOutput();
let mTranslate;

if (machineChoice === 0){
    mTranslate = 'sten';
}

if (machineChoice === 1){
    mTranslate = 'påse';
}

if (machineChoice === 2){
    mTranslate = 'sax';
}

console.log("Spelaren valde: " + pTranslate + " Datorn valde: " + mTranslate);

if (playerChoice === 0 && machineChoice === 2 || 
    playerChoice === 1 && machineChoice === 0 ||
    playerChoice === 2 && machineChoice === 1){
    console.log('Du vann!')
}

else if (playerChoice === machineChoice) {
    console.log('Oavgjort!');
}

else {
    console.log('Du förlorade!');
}
