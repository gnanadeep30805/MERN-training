function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Age is valid.";
}
try {
    var result = checkAge(16);
    console.log(result);
}catch (error) {
    console.log("An error occurred: " + error.message);
}   