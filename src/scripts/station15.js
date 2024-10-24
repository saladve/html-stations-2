function displayList() {
    const fruitlist = document.getElementById('fruits');
    const ul = document.createElement('ul');

    const fruitItems = fruitlist.querySelectorAll('p');
    
    fruitItems.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit.textContent;
        ul.appendChild(li);
    });

    fruitlist.innerHTML = '';
    fruitlist.appendChild(ul);
}