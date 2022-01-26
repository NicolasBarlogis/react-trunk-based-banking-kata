import Statement from './Statement'

export default class Account {
  #statements

  constructor() {
    this.#statements = []
  }

  // 2 digits precision
  getBalance() {
    if(this.#statements.length == 0) {
      return 0
    }
    return parseFloat(this.#statements.at(-1).getBalance().toFixed(2))
  }

  deposit(amount) {
    if(isNaN(amount)) {
      throw new TypeError("Must be a number")
    }
    if(amount < 0) {
      throw new RangeError("Must be positive")
    }
    this.#statements.push(this.#buildStandardDeposit(amount))
  }

  withdraw(amount) {
    if(isNaN(amount)) {
      throw new TypeError("Must be a number")
    }
    if(amount < 0) {
      throw new RangeError("Must be positive")
    }
    this.#statements.push(this.#buildStandardDeposit(-amount))
  }

  #buildStandardDeposit(amount) {
    return new Statement(new Date(Date.now()), amount, this.getBalance() + amount)
  }
}