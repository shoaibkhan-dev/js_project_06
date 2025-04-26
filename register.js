
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists!');
    } else {
        users.push({ fullName, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registered Successfully!');
        window.location.href = 'login.html';
    }
});
