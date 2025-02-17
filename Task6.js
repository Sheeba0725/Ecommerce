//find the prime number

function isprime (number){
    if(number<=1){//less than or equal to 1 is a not prime number
        return false;
}

for(let i=2;i<number;i++){
    if(number%i==0){
        return false;
}
 
}return true;
}

console.log(isprime(21));



