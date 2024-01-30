window.onload = function() {
    var button = document.getElementById('toggleButton');
    var body = document.body;
    var isBlack = false;

    button.onclick = function() {
        if (isBlack) {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }
        isBlack = !isBlack;
    }
}

window.onload = function() {
    var button = document.getElementById('listButton');
    var list = document.getElementById('listDb'); // Substitua 'listId' pelo id da lista que você deseja expandir/colapsar

    button.onclick = function() {
        list.classList.toggle('collapsed');
    }
}