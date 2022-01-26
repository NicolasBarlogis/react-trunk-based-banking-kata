import Statement from './Statement'

export default class Account {
  #statements

  constructor() {
    this.#statements = []
  }

  getBalance() {
    if(this.#statements.length == 0) {
      return 0
    }
    return this.#statements.at(-1).getBalance()
  }

  deposit(amount) {
    if(isNaN(amount) || amount < 0) {
      throw new TypeError("Must be a number")
    }
    this.#statements.push(new Statement(new Date(Date.now()), amount, this.getBalance() + amount))
  }

  withdraw(amount) {
    if(isNaN(amount) || amount < 0) {
      throw new TypeError("Must be a number")
    }
    this.#statements.push(new Statement(new Date(Date.now()), amount, this.getBalance() - amount))
  }
}