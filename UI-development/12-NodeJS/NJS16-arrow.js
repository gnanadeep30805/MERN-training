//without arrow
function add(a,b){
    return a+b;
}
console.log(add(5,10));

function greet(){
    console.log("Hello, welcome to NodeJS!");
}
greet();

//with arrow
const add = (a,b) => a+b;
console.log(add(5,10));

const greet = () => {
    console.log("Hello, welcome to NodeJS!");
};
greet();