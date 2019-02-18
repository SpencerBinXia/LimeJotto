function login() {
    var modal = document.getElementById('loginModal');
    modal.style.display = "block";
}

function spanClick() {
    var modal = document.getElementById('loginModal');
    modal.style.display = "none";
}

window.onclick =function (event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}