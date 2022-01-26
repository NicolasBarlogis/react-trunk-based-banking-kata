export default class Account {
  #balance

  constructor() {
    this.#balance = 0
  }

  // 2 digits precision
  getBalance() {
    return parseFloat(this.#balance.toFixed(2))
  }

  deposit(amount) {
    if(isNaN(amount) || amount < 0) {
      throw new TypeError("Must be a number")
    }
    this.#balance += amount
  }

  withdraw(amount) {
    if(isNaN(amount) || amount < 0) {
      throw new TypeError("Must be a number")
    }
    this.#balance -= amount
  }
}