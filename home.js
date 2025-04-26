
const userNameElement = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
    alert('Please login first! Redirecting...');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
} else {
    userNameElement.textContent = `Welcome, ${currentUser.fullName}`;
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
});
