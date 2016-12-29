class Account {
    static getBaseApiUrl() {
        return this.isProduction()
        ? "https://fredboat.frederikam.com:1356/api"
        : "http://localhost:1356";
    }

    static isLoggedIn(callback) {
        if(localStorage.bearer == null || localStorage.refresh == null || localStorage.bearer === "" || localStorage.refresh === "") {
            callback(false);//Missing credentials
        }

        this.getUserDataAsync(function(result) {
            if(result != null){
                callback(true);
            } else {
                callback(false);
            }
        });
    }

    static isProduction() {
        // eslint-disable-next-line
        return location.hostname !== "localhost" && location.hostname !== "127.0.0.1";
    }

    static getUserDataAsync(callback) {
        if(localStorage.bearer == null || localStorage.refresh == null || localStorage.bearer === "" || localStorage.refresh === "") {
            callback(null);//Missing credentials
        }

        if(Account.userData != null){
            callback(Account.userData);
            return;
        }

        const request = new XMLHttpRequest();
        request.open("GET", "https://discordapp.com/api/users/@me" , true);
        request.setRequestHeader("Authorization", "Bearer " + localStorage.bearer);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                Account.userData = JSON.parse(this.response);
                callback(Account.userData);
            } else {
                callback(null);
            }
        };

        request.onerror = function() {
            callback(null);
        };

        request.send();
    }
}

Account.userData = null;

if(Account.isProduction()){
    console.log("Looks like we are in a production environment.")
}

export default Account;