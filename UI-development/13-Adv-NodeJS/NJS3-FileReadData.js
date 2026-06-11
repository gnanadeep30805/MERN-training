//read the data from file
const myfs = require("fs");
const mybuf_data = myfs.readFileSync("myData.txt");
console.log(mybuf_data);

const myorgdata = mybuf_data.toString();
console.log(myorgdata);