function getRememberedUsername() {
    return localStorage.getItem('rememberedUsername');
  }
  

function setRememberedUsername(username) {
    localStorage.setItem('rememberedUsername', username);
}
  
function clearRememberedUsername() {
    localStorage.removeItem('rememberedUsername');
}
  
function checkforRememberedUsername() {
    const rememberedUsername = getRememberedUsername();
    if (rememberedUsername) {
        document.getElementById("username").value = rememberedUsername;
        document.getElementById("remember").checked = true;
    }
}

const signinbtn = document.getElementById("signin");
signinbtn.addEventListener("click", async () => {
    const errorMessageElement = document.getElementById("errorMessage");
    const pw = document.getElementById("password");
    const un = document.getElementById("username");


    errorMessageElement.textContent = "";

    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const def = "admin";

        if (username !== def && password !== def) {
            throw new Error("Invalid username or password");
        }

        if (!username && !password) {
            throw new Error("Username and password are required");
        }

        if (!username) {
            throw new Error("Username is required");
        }
        if (!password) {
            throw new Error("Password is required");
        }

        if (username.includes(' ') || password.includes(' ')) {
            throw new Error("No spaces allowed");
        }

        if (document.getElementById("remember").checked) {
            setRememberedUsername(username);
        } else {
            clearRememberedUsername();
        }

        window.location.href = "https://www.instagram.com/katarinabluu/";
    } catch (error) {
        errorMessageElement.textContent = error.message;
        errorMessageElement.classList.remove('is-hidden');
        pw.classList.add('is-danger');
        un.classList.add('is-danger');
    }
});


checkforRememberedUsername();
  