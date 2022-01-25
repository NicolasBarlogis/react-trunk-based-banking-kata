export default class Account {
  #balance

  constructor() {
    this.#balance = 0
  }

  getBalance() {
    return this.#balance
  }

  deposit(amount) {
    if(isNaN(amount)) {
      throw new TypeError("Must be a number")
    }
    this.#balance += Math.abs(amount)
  }

  withdraw(amount) {
    if(isNaN(amount) || amount < 0) {
      throw new TypeError("Must be a number")
    }
    this.#balance -= Math.round(amount)
  }
}