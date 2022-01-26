export default class Statement {
  #date
  #amount
  #balance

  constructor(date, amount, balance) {
  	if(!(date instanceof Date)) {
  		throw new TypeError("date must be a Date")
  	}
  	if(isNaN(amount)) {
  		throw new TypeError("amount must be a number")
  	}
  	if(isNaN(balance)) {
  		throw new TypeError("balance must be a number")
  	}

    this.#date = date
    this.#amount = amount
    this.#balance = balance
  }

  getBalance() {
	return this.#balance
  }
}