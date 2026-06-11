var fourDigitOTP = Math.floor(1000 + Math.random() * 9000);
console.log("Generated 4-digit OTP: " + fourDigitOTP);

var sixDigitOTP = Math.floor(100000 + Math.random() * 900000);
console.log("Generated 6-digit OTP: " + sixDigitOTP);


//using funciton
function generateOTP(digits) {
    if (digits === 4) {
        return Math.floor(1000 + Math.random() * 9000);
    } else if (digits === 6) {
        return Math.floor(100000 + Math.random() * 900000);
    } else {
        return "Invalid number of digits. Please choose either 4 or 6.";
    }  
}

console.log("Generated 4-digit OTP using function: " + generateOTP(4));
console.log("Generated 6-digit OTP using function: " + generateOTP(6));