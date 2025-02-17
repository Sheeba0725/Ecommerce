//find the largest number in array

let arr=[12,5,3,63,2,4,8,9,1];
let largest=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}

console.log("largest number is:",largest);
  