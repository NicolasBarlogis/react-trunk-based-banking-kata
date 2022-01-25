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
  account.deposit(50)
  account.deposit(150)
  account.deposit(30)

  // Assert
  expect(account.getBalance()).toBe(230)
});

test('Deposits Should only accept numbers', () => {
  // Arrange
  const account = new Account()

  // Act/Assert
  expect(() => { account.deposit("toto") }).toThrow(TypeError)
});

test('Account with one withdrawal Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.withdraw(50)

  // Assert
  expect(account.getBalance()).toBe(-50)
});