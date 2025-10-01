
const sumGrocery = (groceryA, groceryB, groceryC) => {
    
    let total = groceryA + groceryB + groceryC;
    
    document.getElementById('result').innerHTML = `The total amount of the grocery is: ${total}`;
}

const handleClick = () => {
    let groceryA = parseFloat(document.getElementById('groceryA').value);
    let groceryB = parseFloat(document.getElementById('groceryB').value);
    let groceryC = parseFloat(document.getElementById('groceryC').value);

    sumGrocery(groceryA, groceryB, groceryC);

}
