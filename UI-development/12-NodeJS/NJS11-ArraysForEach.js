let colors = ["red", "green", "blue"];
console.log("With colors.forEach() method");
colors.forEach(function (color) {
    console.log(color);
})
console.log("With for loop");
for (let c of colors) {
    console.log(c);
}
