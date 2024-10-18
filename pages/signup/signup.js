document.querySelector(".signUpForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let userEmail = document.getElementById("userEmail").value;
        let userPassword = document.getElementById("userPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        console.log(userEmail, userPassword, confirmPassword);

        if (userEmail && userPassword && confirmPassword) {
            if (userPassword !== confirmPassword) {
                document.getElementById("alertMessage").innerHTML = "Password and Confirm Password do not match!";
                document.getElementById("alertMessage").classList.add("alert-danger");

                setTimeout(function () {
                    document.getElementById("alertMessage").innerHTML = "";
                    document.getElementById("alertMessage").classList.remove("alert-danger");
                }, 2000);

                return;
            }
            localStorage.setItem("Email", userEmail);
            localStorage.setItem("password", userPassword);

            document.getElementById("alertMessage").innerHTML = "Sign Up Successful!";
            document.getElementById("alertMessage").classList.add("alert-success");

            setTimeout(function () {
                window.location.href = "/pages/login/login.html";
            }, 2000);
            
        } else {

            document.getElementById("alertMessage").innerHTML = "Please fill all the blanks!";
            document.getElementById("alertMessage").classList.add("alert-danger");

            setTimeout(function () {
                document.getElementById("alertMessage").innerHTML = "";
                document.getElementById("alertMessage").classList.remove("alert-danger");
            }, 2000);
        }
    });
