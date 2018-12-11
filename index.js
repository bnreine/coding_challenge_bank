const stringNumbers = [];
stringNumbers[0] = [" _ ", "| |", "|_|"];  //zero
stringNumbers[1] = ["   ", "  |", "  |"];   // one
stringNumbers[2] = [" _ ", " _|", "|_ "];  //two
stringNumbers[3] = [" _ ", " _|", " _|"]; //three
stringNumbers[4] = ["   ", "|_|", "  |"];  //four
stringNumbers[5] = [" _ ", "|_ ", " _|"];  //five
stringNumbers[6] = [" _ ", "|_ ", "|_|"];  //six
stringNumbers[7] = [" _ ", "  |", "  |"];  //seven
stringNumbers[8] = [" _ ", "|_|", "|_|"];  //eight
stringNumbers[9] = [" _ ", "|_|", " _|"];  //nine


const min = 0;
const max = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


var accountNumberArray = [];
for (let i=0; i<3; i++){
  accountNumberArray[i]="";
  for (let j=0; j<9; j++){
    accountNumberArray[i]+=getRandomInt(min, max).toString();
  }
}

var accountCharacterString = "";
for (let i=0; i<3; i++){
  const accountNumber = accountNumberArray[i];
  for(let j=0; j<4; j++){
    for (let k=0; k<9; k++){
      if (j !== 3){
        const actualNumberDigit = parseInt(accountNumber[k]);
        accountCharacterString += stringNumbers[actualNumberDigit][j];
      } else {
        accountCharacterString += "   ";
      }
    }
    accountCharacterString += "\n";
  }
}

console.log(accountCharacterString);
console.log(accountNumberArray);
