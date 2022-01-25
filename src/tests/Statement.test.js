import Statement from '../Statement'

test('Statement Should return correct balance', () => {
  // Arrange
  const statement = new Statement(Date.now(), 50, 120)

  // Assert
  expect(statement.getBalance()).toBe(120)
});
