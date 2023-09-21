document.getElementById("loginButton").addEventListener("click", async () => {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "";

    try {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const def = "admin";

        if (!username || !password) {
            throw new Error("Username and password are required.");
        }
        if (username !== def || password !== def) {
            throw new Error("Invalid username or password.");
        }
        if(username.includes(' ') || password.includes(' ')){
            throw new Error("No spaces allowed.");
        }

        window.location.href = "https://www.instagram.com/katarinabluu/";
    } catch (error) {
        errorMessageElement.textContent = error.message;
    }
});