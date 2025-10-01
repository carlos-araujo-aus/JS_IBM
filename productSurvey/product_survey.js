const username = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const job = document.getElementById("job");
const designation = document.getElementById("designation");
const productType = document.getElementById("productType");
const feedbackText = document.getElementById("feedbackText");



const submitFeedback = () => {
    document.getElementById("userName").innerHTML = username.value;
    document.getElementById("userAge").innerHTML = age.value;
    document.getElementById("userEmail").innerHTML = email.value;
    document.getElementById("userJob").innerHTML = job.value;
    document.getElementById("userDesignation").innerHTML = designation.value;
    document.getElementById("userProductChoice").innerHTML = productType.value;
    document.getElementById("userFeedback").innerHTML = feedbackText.value;

    document.getElementById("userInfo").style.display = "block";
    
    alert("Thank you for your feedback");
}

const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        submitFeedback();
    }
});
