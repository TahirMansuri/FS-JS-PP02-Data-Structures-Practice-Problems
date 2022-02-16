function getRandomNo(){
    return Math.floor(Math.random()*10)%6+1;
}

let diceMap = new Map();

while(true){
    let diceNo = getRandomNo();
    if(diceMap.get(diceNo)!=null){
        let value = diceMap.get(diceNo);
            if(value==20){
                break;
            }
        diceMap.set(diceNo,++value);
    } else {
        diceMap.set(diceNo,1);
    }
}

for(let [key,value] of diceMap) {
    console.log("Dice Key :"+key+"\t Value :"+value);
}

// let maxValue=0,minValue=20;
// let maxKey,minKey;
// for(let [keys,values] of diceMap) {
//     if(maxValue < values){
//         maxKey = keys;
//         maxValue = values;
//     }
//     if(minValue > values){
//         minKey = keys;
//         minValue = values;
//     }
// }

// console.log("Max Key :"+maxKey+"\tMax Value :"+maxValue);
// console.log("Min Key :"+minKey+"\tMin Value :"+minValue);

console.log(""+[...diceMap.entries()].reduce((a,e)=>e[1]>a[1]?e:a));
console.log(""+[...diceMap.entries()].reduce((a,e)=>e[1]<a[1]?e:a));