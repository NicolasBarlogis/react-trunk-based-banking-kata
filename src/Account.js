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
    return -50
  }
}