import { dayRate } from './freelancer-rates';
describe('freelancer-rates', () => {
  describe('dayRate', () => {
    it('calculates given hourly rate, assuming 8-hour day', () => {
      expect(dayRate(1)).toBe(8);
      expect(dayRate(2)).toBe(2 * 8);
    });
  });
});
