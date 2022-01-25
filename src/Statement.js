export default class Statement {
  #date
  #amount
  #balance

  constructor(date, amount, balance) {
    this.#date = date
    this.#amount = amount
    this.#balance = balance
  }

  getBalance() {
	return this.#balance
  }
}