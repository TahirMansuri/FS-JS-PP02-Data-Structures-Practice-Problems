function getRandomNo() {
    return Math.floor(Math.random()*(999-100+1)+100);
}
let n = 10;
randomNoArr = new Array();

for(i = 0; i < n; i++) {
    randomNoArr.push(getRandomNo());
}

console.log("Random No. :"+randomNoArr);

for(i = 0; i < n; i++) {
    for(j = 0; j < n; j++) {
        if(randomNoArr[i]<=randomNoArr[j]){
            temp = randomNoArr[i];
            randomNoArr[i] = randomNoArr[j];
            randomNoArr[j] = temp;
        }
    }
}

console.log("Sorted Ranodm No Arr :" + randomNoArr);

console.log("Second Largest No. :"+randomNoArr[n-1]);
console.log("Second Smallest No. :"+randomNoArr[n-9]);