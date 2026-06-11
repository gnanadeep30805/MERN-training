function p1(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(20);
        }, 2000);
    });
}

function p2(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(30);
        }, 3000);
    });
}

async function runAll() {
    try {
        const result1 = await p1();
        console.log(result1);
        const result2 = await p2();
        console.log(result2);
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
runAll(); 