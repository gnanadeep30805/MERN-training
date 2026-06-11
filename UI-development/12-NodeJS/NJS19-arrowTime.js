
//setTimeout without arrow
console.log("Start")
setTimeout(function(){
    console.log("Executed after 2 seconds");
}, 2000);


//setTimeout with arrow
console.log("start")
setTimeout(() => {
    console.log("inside timeout")
}, 0);