let count = 0;

const increaseCount = () => {
    count++;
    displayCount();
    checkCountValue();
}

const displayCount = () => {
    document.getElementById('countDisplay').innerHTML = count;
}

const checkCountValue = () => {
    if (count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!")
    } else if (count === 20){
        alert("Your instagram post gained 20 followers! Keep it up!")
    }
}
