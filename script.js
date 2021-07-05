window.onLoad = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm();
    })
}

function handleItemForm(event, formRef) {
    if(event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();


    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount")
    let id = getRandomInt(0, 100000);

    let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventsListener("click", () => {
      console.log("DeleteButton Works");
    })
}

function createListItemHtml(itemName, itemAmount) {
    return '<li id="item${id}">
                ${item Name} - ${itemAmount}
                ${itemName.value} - ${itemAmount.value}
                <button id="button${id}" type={"button"}>Delete item</button>
            </li>';

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}