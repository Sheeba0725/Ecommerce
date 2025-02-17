
// let arr=[1,2,3,4,2,5,6,7,6,8,9,10]

// let countOccurrences = {};

// for (let item of arr) {
//   if (countOccurrences[item]) {
//     countOccurrences[item] += 1;
//   } else {
//     countOccurrences[item] = 1;
//   }
// }

// console.log(countOccurrences);

let array=[5,1,1,2,6,9,1];
let count={};


for(let num of array){
    count[num]=(count[num]||0)+1;

    for(let num in count){
        if(count[num]>1){
            console.log(`${num}=${count[num]} times`);
            
        }else{
            console.log("no duplicates");
            
        }
    }
}