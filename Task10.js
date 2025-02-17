// //Find Duplicate Values in an Array

let arr=[1,2,3,4,2,5,6,7,6,8,9,10]

let duplicate=[];          //using indexof and includes and push methods

for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])!==i && !duplicate.includes(arr[i])){
        duplicate.push(arr[i]);
    }
}
console.log(duplicate);



//it is a simple method in find the duplicate in array
let array = [1, 2, 3, 2, 4, 5, 4, 5];
let duplicates = array.filter((item, index) => array.indexOf(item) !== index);
console.log(duplicates); // Output: [2, 4, 5]
/*Explanation:

For item = 1 at index = 0: array.indexOf(1) is 0, so 0 !== 0 is false. 1 is not a duplicate.
For item = 2 at index = 1: array.indexOf(2) is 1, so 1 !== 1 is false. 2 is not a duplicate at its first occurrence.
For item = 3 at index = 2: array.indexOf(3) is 2, so 2 !== 2 is false. 3 is not a duplicate.
For item = 2 at index = 3: array.indexOf(2) is 1, so 1 !== 3 is true. 2 is a duplicate.
For item = 4 at index = 4: array.indexOf(4) is 4, so 4 !== 4 is false. 4 is not a duplicate at its first occurrence.
For item = 5 at index = 5: array.indexOf(5) is 5, so 5 !== 5 is false. 5 is not a duplicate at its first occurrence.
For item = 4 at index = 6: array.indexOf(4) is 4, so 4 !== 6 is true. 4 is a duplicate.
For item = 5 at index = 7: array.indexOf(5) is 5, so 5 !== 7 is true. 5 is a duplicate.
Thus, the duplicates array contains [2, 4, 5].
*/
