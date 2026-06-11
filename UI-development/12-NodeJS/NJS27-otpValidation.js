var otp = Math.floor(100000 + Math.random() * 900000);
console.log("Generated OTP: " + otp);


//verification
function verifyOTP(inputOTP) {
    if (inputOTP === otp) {
        console.log("OTP verified successfully!");
    } else {
        console.log("Invalid OTP. Please try again.");
    }
}

// Simulating user input for OTP verification
setTimeout(() => {
    const userInput = 
    verifyOTP(userInput);
}, 15000); // User attempts to verify OTP after 15 seconds