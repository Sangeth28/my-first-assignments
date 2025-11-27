//Named functions
function userProfile(name){
    console.log(`Hello ${name}`)
}

userProfile('Sangeth');

//Arrow functions
let double = (number) => {
    console.log(number * 2);
}
double(2);

//Anonymous functions or Functions expressions
setTimeout(function(){
    console.log('This message is delayed by 2 seconds');
}, 2000);

//Callback functions
function getUserdata(callback){
    setTimeout(function(){
        callback();
    }, 3000);
}