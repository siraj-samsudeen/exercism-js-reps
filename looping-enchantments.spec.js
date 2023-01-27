import { cardTypeCheck, determineOddEvenCards } from './enchantments';

const TYPE_IS_ODD = false;
const TYPE_IS_EVEN = true;

describe('cardTypeCheck', () => {
  test('a single matching card', () => {
    expect(cardTypeCheck([1], 1)).toBe(1);
  });

  xtest('a single matching card among many', () => {
    expect(cardTypeCheck([7, 4, 7, 3, 1, 2], 1)).toBe(1);
  });

  xtest('a single unmatched card', () => {
    expect(cardTypeCheck([1], 2)).toBe(0);
  });

  xtest('multiple matching cards', () => {
    expect(cardTypeCheck([7, 7, 7], 7)).toBe(3);
  });

  xtest('multiple matching cards among many', () => {
    expect(cardTypeCheck([1, 2, 3, 7, 7, 7, 3, 2, 1], 7)).toBe(3);
  });

  xtest('no matching cards', () => {
    expect(cardTypeCheck([1, 2, 3, 4, 5, 4, 3, 2, 1], 7)).toBe(0);
  });
});

describe('determineOddEvenCards', () => {
  xtest('a single odd card', () => {
    expect(determineOddEvenCards([1], TYPE_IS_ODD)).toBe(1);
    expect(determineOddEvenCards([1], TYPE_IS_EVEN)).toBe(0);
  });

  xtest('a single even card', () => {
    expect(determineOddEvenCards([2], TYPE_IS_ODD)).toBe(0);
    expect(determineOddEvenCards([2], TYPE_IS_EVEN)).toBe(1);
  });

  xtest('multiple odd cards', () => {
    expect(determineOddEvenCards([1, 3, 5], TYPE_IS_ODD)).toBe(3);
    expect(determineOddEvenCards([1, 3, 5], TYPE_IS_EVEN)).toBe(0);
  });

  xtest('multiple even cards', () => {
    expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_ODD)).toBe(0);
    expect(determineOddEvenCards([2, 2, 4, 6, 6], TYPE_IS_EVEN)).toBe(5);
  });

  xtest('a mix of odd and even cards', () => {
    expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_ODD)).toBe(5);
    expect(determineOddEvenCards([1, 2, 1, 1, 2, 1, 9], TYPE_IS_EVEN)).toBe(2);
  });
});
