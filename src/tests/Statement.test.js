import Statement from '../Statement'

test('Statement Should return correct balance', () => {
  // Arrange
  const statement = new Statement(new Date(Date.now()), 50, 120)

  // Assert
  expect(statement.getBalance()).toBe(120)
});

test('Statement Should have correct date', () => {
   expect(() => { new Statement("toto", 50, 120) }).toThrow(TypeError)
});

test('Statement Should have correct amount', () => {
   expect(() => { new Statement(new Date(Date.now()), "toto", 120) }).toThrow(TypeError)
});

test('Statement Should have correct balance', () => {
   expect(() => { new Statement(new Date(Date.now()), 50, "toto") }).toThrow(TypeError)
});