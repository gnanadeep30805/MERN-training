try{
    var result = 10 / 0;
    console.log("Result: " + result);
}
catch(error){
    console.log("An error occurred: " + error.message);
}
finally{
    console.log("This block will always execute.");
}