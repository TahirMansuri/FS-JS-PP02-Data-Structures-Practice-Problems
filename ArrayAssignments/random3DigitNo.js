function getRandomNo(){
    return Math.floor(Math.random()*(999-100+1)+100);
}
let randomNoArr=new Array();
for(i=0;i<10;i++){
    randomNoArr.push(getRandomNo());
}

console.log("RandomNo :"+randomNoArr);

let firstLargest=randomNoArr[0]; 
let secondLargest=randomNoArr[0];
let firstSmallest=randomNoArr[0]; 
let secondSmallest=randomNoArr[0];
    for (i=0; i<10 ; ++i)
     {
        if (firstLargest<randomNoArr[i])
        {
            secondLargest = firstLargest;
            firstLargest = randomNoArr[i];
        }
        if (firstSmallest>randomNoArr[i])
        {
            secondSmallest = firstSmallest;
            firstSmallest = randomNoArr[i];
        }

    }
console.log("Second Largest No. : "+secondLargest)
console.log("Second Smallest No. :"+secondSmallest)