let num = [1,2,3,4,5];

//using for loop
console.log("Using for loop:");
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

//using forEach with function
console.log("Using forEach with function:");
num.forEach(function(item){
    console.log(item);
});

//using forEach with arrow function
console.log("Using forEach with arrow function:");
num.forEach((item) => {
    console.log(item);
});
