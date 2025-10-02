const breakfastMenu = ['Pancakes', 'Eggs', 'Bacon', 'Coffee', 'Juice'];
const mainCourseMenu = ['Salad', 'Pasta', 'Steak', 'Chicken', 'Fish'];
const dessertMenu = ['Ice Cream', 'Cake', 'Pie', 'Cookies', 'Chocolate'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item} </p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItemsHTML = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItemsHTML += `<p>Item ${index +1}: ${item} </p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItemsHTML;

let dessertItemsHTML = '';
for (let i = 0 ; i < dessertMenu.length; i++) {
    dessertItemsHTML += `<p>Item ${i +1}: ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItemsHTML;

