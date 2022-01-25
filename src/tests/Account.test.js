import Account from '../Account'

test('Account with one deposit Should have correct balance', () => {
  // Arrange
  const account = new Account()
  
  // Act
  account.deposit(50)

  // Assert
  expect(account.getBalance()).toBe(50)
});