// Initialize the storedPassword with the value "232425"
var storedPassword = "232425";

// Function to print the storedPassword every day
function printStoredPassword() {
    // Print the password
    console.log("Daily password: " + storedPassword);
    
    // Schedule the function to run again after 24 hours (in milliseconds)
    setTimeout(printStoredPassword, 24 * 60 * 60 * 1000);
}

// Initial call to start the process
printStoredPassword();

var pandawepLink = "https://pandawep.in";

