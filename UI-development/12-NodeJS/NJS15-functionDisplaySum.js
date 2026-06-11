function add(a,b){
    return a+b;
}

function displaySum(x,y){
    let sum = add(x,y);
    console.log("The sum of "+x+" and "+y+" is: "+sum);
}
displaySum(5,10);