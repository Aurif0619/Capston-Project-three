document.querySelector(".loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userEmailLogin = document.getElementById('userEmailLogin').value;
    let userPasswordLogin = document.getElementById('userPassword').value;

    let storedEmail = localStorage.getItem('Email');
    let storedPassword = localStorage.getItem('password');

    if (userEmailLogin === storedEmail && userPasswordLogin === storedPassword) {
        alert('Welcome to the Home page');
        window.location.href = "/index.html";
    } else {
        alert('Something went wrong!');
    }

    console.log(userEmailLogin, userPasswordLogin);
});
