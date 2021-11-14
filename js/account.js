const username = document.getElementById('username');
const email = document.getElementById('email');
const pfp = document.getElementById('pfp');


username.innerHTML = JSON.parse(localStorage.getItem('user')).username
pfp.src = JSON.parse(localStorage.getItem('user')).pfp
email.innerHTML = JSON.parse(localStorage.getItem('user')).email