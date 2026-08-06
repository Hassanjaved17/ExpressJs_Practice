const { createUser, findUser } = require("..models/user");

exports.createUser = async (email, password) => { // Create a new user with the provided email and password
    try {
        await createUser(email, password); // Call the createUser function from the user model to create a new user
    }
    catch (err) { // Catch any errors that occur during the user creation process
        throw err
    }
};

exports.login = async (email, password) => { // Log in a user with the provided email and password  
    try {
        const user = await findUser(email); // Call the findUser function from the user model to find the user with the provided email
        if (user.password === password) {  // Check if the provided password matches the user's password
            return "Login successful"; // Return a success message
        }
        return "Invalid email or password";
    } catch (err) {  // Catch any errors that occur during the login process
        throw err;
    }
};
