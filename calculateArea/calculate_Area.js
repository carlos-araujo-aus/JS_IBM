let length;
let width;

const calculateArea = () => {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;
}