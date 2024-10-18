// Sign In
document.querySelector(".loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;

    let storedEmail = localStorage.getItem('Email');
    let storedPassword = localStorage.getItem('password');

    if (userEmail && userPassword) {
        if (userEmail === storedEmail && userPassword === storedPassword) {
            document.getElementById("alertMessage").innerHTML = "Welcome to the Home page!";
            document.getElementById("alertMessage").classList.add("alert-success");

            setTimeout(function () {
                window.location.href = "/index.html";
            }, 2000);
        } else {
            document.getElementById("alertMessage").innerHTML = "Something went wrong!";
            document.getElementById("alertMessage").classList.add("alert-danger");

            setTimeout(function () {
             document.getElementById("alertMessage").innerHTML = "";
            document.getElementById("alertMessage").classList.remove("alert-danger");
            }, 2000)
        }
    } else {
        document.getElementById("alertMessage").innerHTML = "Please the credential!";
        document.getElementById("alertMessage").classList.add("alert-danger");

        setTimeout(function () {
            document.getElementById("alertMessage").innerHTML = "";
           document.getElementById("alertMessage").classList.remove("alert-danger");
           }, 2000)
    }

    console.log(userEmail, userPassword);
});
