const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
        if (password.type === "password") {
            password.type = "text";
            togglePassword.src = "./icons/esconder.png";
        } else {
            password.type = "password";
            togglePassword.src = "./icons/visualizar.png";
        }
    });
