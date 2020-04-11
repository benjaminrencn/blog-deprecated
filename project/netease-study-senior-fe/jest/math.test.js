const { add } = require('./math');

test('加法测试1', () => {
  expect(add(1, 2)).toBe(3);
});

test('加法测试2', () => {
  expect(add(1, 2)).toBe(5);
});