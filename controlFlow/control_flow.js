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

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log ("Authentication Status: ", authenticationStatus);

let role = prompt("Enter your role");
let dietaryType;
let serviceType;

if (role === "employee" || role === "Suscriber") {
    dietaryType = "Dietary Services";
    serviceType = "not applicable";
} else if (role === "Enrolled Member") {
    dietaryType = "Dietary Services";
    serviceType = "one-on-one interaction with a dietician";
} else if(role === "Non-Suscriber") {
    console.log ("You are not eligible for any services");
} else {
    console.log ("Invalid role");
}

console.log ("Dietary Type: ", dietaryType);
console.log ("Service Type: ", serviceType);


 
