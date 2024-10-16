document.querySelector(".signUpForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let userEmail = document.getElementById("userEmail").value;
        let userPassword = document.getElementById("userPassword").value;

        console.log(userEmail, userPassword);

        if (userEmail && userPassword) {
            
            localStorage.setItem("Email", userEmail);
            localStorage.setItem("password", userPassword);

            alert("Sign Up Successful!");
            window.location.href="/pages/login/login.html"
        }
    });
