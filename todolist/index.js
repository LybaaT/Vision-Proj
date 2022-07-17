// Update the storage
function update() {
    const items = document.getElementById('container').innerHTML;
    localStorage.setItem('todostorage', items);
}

// Check if there are saved items, if not create one to show the user how it works
const save = localStorage.getItem('todostorage')
if ([null,''].includes(save)) {
    add('Click this to remove it');
    update();
} else {
    document.getElementById('container').innerHTML = save;
}

// Add an item
function add(item) {
    document.getElementById('container').innerHTML += `<li class="item" onclick="remove(this);">${item}</li>`
    update();
}

// Remove an element
function remove(element) {
    element.remove();
    update();
}

// Sends the input text and makes the input empty
function send() {
    if (inputtext.value !== '') {
        add(inputtext.value);
        inputtext.value = '';
    }
}

// Check if enter was pressed to send the item that way
function enter() {
    if (event.key === 'Enter') {
        send();
    };
};