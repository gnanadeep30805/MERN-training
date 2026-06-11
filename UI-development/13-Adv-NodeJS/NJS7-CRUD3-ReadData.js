const myfs = require("fs");
const data = myfs.readFileSync("CRUD/myinfo.txt","utf-8");
console.log(data);