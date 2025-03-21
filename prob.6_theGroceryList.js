// ask the user if want to prompt
let list = prompt(" do you want to create a grocery list (yes or no): ");
if (list == "yes") {
    let grocery_list = [];
    let number = parseInt(prompt(" enter the number of item to be register: "));
// loop statement 
for (let i = 0; i < number; i++) {
   let items = prompt(`enter item ${i + 1}:`);
   
   grocery_list.push(items);
}
//sorting and reverse 
let groceryList_sort = [...grocery_list].sort();
let groceryList_reverse = [...grocery_list].reverse();

// console.log using an alert
alert("grocery list : " + grocery_list + "\n" + "sorted list: " + groceryList_sort + "\n" + "reversed list: " + groceryList_reverse);
}