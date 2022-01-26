import Account from '../Account'

test('Account with one deposit Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.deposit(50)

  // Assert
  expect(account.getBalance()).toBe(50)
});

test('Account with multiple deposits Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.deposit(50.7)
  account.deposit(150.68)
  account.deposit(30.26)

  // Assert
  expect(account.getBalance()).toBe(231.64)
});

test('Deposits Should only accept numbers', () => {
  // Arrange
  const account = new Account()

  // Act/Assert
  expect(() => { account.deposit("toto") }).toThrow(TypeError)
});

test('Deposits Should only accept positive numbers', () => {
  // Arrange
  const account = new Account()

  // Act/Assert
  expect(() => { account.deposit(-10) }).toThrow(TypeError)
});

test('Account with one withdrawal Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.withdraw(50)

  // Assert
  expect(account.getBalance()).toBe(-50)
});

test('Account with multiple withdrawal Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.withdraw(50)
  account.withdraw(150.3)
  account.withdraw(30.9)

  // Assert
  expect(account.getBalance()).toBe(-231.2)
});

test('Withdraws Should only accept numbers', () => {
  // Arrange
  const account = new Account()

  // Act/Assert
  expect(() => { account.withdraw("toto") }).toThrow(TypeError)
});

test('Withdraws Should only accept positive numbers', () => {
  // Arrange
  const account = new Account()

  // Act/Assert
  expect(() => { account.withdraw(-10) }).toThrow(TypeError)
});

test('Account with multiple withdrawal/deposits Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.deposit(50)
  account.deposit(36.3)
  account.withdraw(60)
  account.withdraw(110.75)
  account.deposit(105)
  account.withdraw(27.03)

  // Assert
  expect(account.getBalance()).toBe(-6.48)
});