const LoggedInKey = "loggedInUser";

class LoginService {
    set(user) {
        let str = JSON.stringify(user);
        localStorage.setItem(LoggedInKey, str);
    }

    get(){
        let str = localStorage.getItem(LoggedInKey);
        return JSON.parse(str);
    }
}

export default new LoginService();
