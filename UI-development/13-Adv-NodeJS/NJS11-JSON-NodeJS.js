//JSON data write
const myfs = require("fs");
const bioData = {
    name : "Jayu",
    age : 20,
    skill : "NodeJS Programmer"
}
console.log(bioData);
var myData = JSON.stringify(bioData);
console.log("My JSON Data :",myData);
myfs.writeFile("myjsondata9.json",myData,(err) => {
    console.log("Process Completed");
});   