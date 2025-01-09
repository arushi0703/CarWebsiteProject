function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

function login() {
    document.getElementById("loginEmail").style.left = "4px";
    document.getElementById("register").style.right = "-520px";
    document.getElementById("loginBtn").className += " white-btn";
    document.getElementById("registerBtn").className = "btn";
    document.getElementById("login").style.opacity = 1;
    document.getElementById("register").style.opacity = 0;
}

function register() {
    document.getElementById("login").style.left = "-510px";
    document.getElementById("register").style.right = "5px";
    document.getElementById("loginBtn").className = "btn";
    document.getElementById("registerBtn").className += " white-btn";
    document.getElementById("login").style.opacity = 0;
    document.getElementById("register").style.opacity = 1;
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateRegister() {
    var firstname = document.getElementById("firstName").value;
    var secondname = document.getElementById("secondName").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!firstname || !secondname || !gender || !email || !password) {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Registration successful!");
    return true;
}

function validateLogin() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Email and password are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Login successful!");
    return true;
}

//filteringg
function filterProducts() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const productId = product.id.toLowerCase();

        if (productId.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
