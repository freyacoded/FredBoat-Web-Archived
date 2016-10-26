class Account {
	static isLoggedIn() {
		return false;//todo
	}

	static isProduction() {
		// eslint-disable-next-line
		return !location.hostname == "localhost" && !location.hostname == "127.0.0.1";
	}
}

if(Account.isProduction()){
	console.log("Looks like we are in a production environment.")
}

export default Account;