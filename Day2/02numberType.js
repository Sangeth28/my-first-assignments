function numberType(number){
   
if (number > 0) {
    result = 'Given number is grater than 0';
    return result;
} else if (number < 0) {
    result =`Given number is less than 0`;
    return result;
} else {
    result = "Given number is zero";
    return result;
}

}
let result='';
let number=0;
console.log(numberType(1));
console.log(numberType(-2));
console.log(numberType(0));
console.log(typeof result);
console.log(typeof number);
