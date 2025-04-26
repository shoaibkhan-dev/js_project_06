
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        window.location.href = 'home.html';
    } else {
        alert('Incorrect Email or Password!');
    }
});
