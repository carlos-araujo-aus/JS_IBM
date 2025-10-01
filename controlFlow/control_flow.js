let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "full access";
} else if (userRole === "manage") {
    accessLevel = "limited access granted";
} else {
    accessLevel = "no access granted";
}

console.log ("Access Level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome Admin";
    } else {
        userMessage = "Welcome User";
    }
} else {
    userMessage = "Please login to continue";
}

console.log ("User Message: ", userMessage);

let userType = "suscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "Suscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log ("User Category: ", userCategory);