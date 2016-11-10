class Account {
	static getBaseApiUrl() {
		return this.isProduction()
		? "https://fbserver.frederikam.com:5998"
		: "http://localhost:5998";
	}

	static isLoggedIn(callback) {
		callback(true);//debug
		return;
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
		if(Account.userData != null){
			callback(Account.userData);
			return;
		}

		var request = new XMLHttpRequest();
		request.open("GET", this.getBaseApiUrl() + "/user" , true);
		request.setRequestHeader("Authorization", localStorage.token);

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