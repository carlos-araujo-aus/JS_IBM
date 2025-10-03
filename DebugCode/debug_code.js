const performOperation = () => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result1 = multiply (num1, num2);
        let result2 = add (num1, num2);
        let result3 = subtract (num1, num2);
        let result4 = divide (num1, num2);
        displayResult(result1, result2, result3, result4);
    } else {
        displayResult('Please enter valid numbers');
    }
}

const multiply = (a, b) => {
    //debugger;
    return a * b;
}

const add = (a, b) => {
    //debugger;
    return a + b;
}


const subtract = (a, b) => {
    //debugger;
    return a - b;
}


const divide = (a, b) => {
    //debugger;
    return a / b;
}


const displayResult = (result1, result2, result3, result4) => {
    let resultElement = document.getElementById('result');
    resultElement.textContent = `The following operations are performed: ${result1}, ${result2}, ${result3}, ${result4}`;

}

