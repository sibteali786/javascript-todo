const listContent = document.querySelector(".content");
const itemName = document.querySelector("#item-name");
const addButton = document.querySelector(".add-btn");

const addItems = (toDoItem) => {
  // List Item
  const liItem = document.createElement("li");
  liItem.className = "item";

  // p tag
  const pItem = document.createElement("p");
  const pText = document.createTextNode(toDoItem); // For putting text in something

  // Adding text in p tag
  pItem.appendChild(pText);
  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  const btnText = document.createTextNode("Delete");
  deleteBtn.appendChild(btnText);

  liItem.appendChild(pItem);
  liItem.appendChild(deleteBtn);

  // appending item to the content class
  listContent.appendChild(liItem);

  // deleting the card by delete btn
  deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
};

// Empty Array item
var item = [];
var id = 1;
// getting localStorage data into localStorageItems
const localStorageItems = localStorage.getItem("items");

// condition to assign empty item array values if localStorage items is not already empty
if (localStorageItems !== null) {
  // has to do items
  item = JSON.parse(localStorageItems);
  for (var i = 0; i < item.length; i++) {
    const currentItem = item[i];
    addItems(currentItem.name);
  }
}
console.log(localStorageItems);
addButton.addEventListener("click", (e) => {
  const itemValue = itemName.value;
  const newItem = {
    id: new Date().getTime(),
    name: itemValue,
  };
  item.push(newItem);

  const JSONItems = JSON.stringify(item);
  localStorage.setItem("items", JSONItems);

  itemName.value = ""; // so that after we write and add something previous value disappears
  addItems(itemValue);
});

// How to save something in browser as a local value without any data base
