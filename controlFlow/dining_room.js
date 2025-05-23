let userRole = "employee";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType;
let userCategory;
let isAuthenticated = true;
if (userRole === "employee") {
    accessLevel = "Full access granted";
} else if (userRole === "registered_member") {
    accessLevel = "Full access granted";
} else if (userRole === "subscriber") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, employee!";
    } else if(userRole === "registered_member") {
        userMessage = "Welcome, member!";
    } else if(userRole === "subscriber") {
        userMessage = "Welcome, subscriber!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
switch (userType) {
    case "employee":
        userCategory = "employee";
        break;
    case "registered_member":
        userCategory = "member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("User Role:", userRole);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("User Type:", userType);
console.log("Authentication Status:", authenticationStatus);