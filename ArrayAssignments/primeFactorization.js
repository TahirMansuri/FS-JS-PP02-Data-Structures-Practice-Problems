const readline = require("readline-sync");

console.log("Enter Any No. :");
var number = Number(readline.question());

console.log(number);
let primeFactArr = new Array();
for(i=1; i<number; i++){
    if(number%i==0) {
        let temp=1;

        for(j=2; j<i; j++) {
            if(i%j==0){
                temp=0;
                break;
            }
        }

        if(temp==1){
            primeFactArr.push(i);
        } else {
            temp=1;
        }
    }
}

console.log(primeFactArr);