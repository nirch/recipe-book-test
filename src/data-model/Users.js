import users from "./data/users";

let activeUser = null;

function getActiveUser() {
    return activeUser;
}

function login(email, pwd) {
    return new Promise((resolve, reject) => {
        users.forEach(user => {
            if (user.email === email && user.pwd === pwd) {
                activeUser = user;
            }
        });

        resolve(activeUser);
    });
}

function logout() {
    activeUser = null;
}

export default {
    getActiveUser,
    login,
    logout
};