import { dayRate } from './freelancer-rates';
describe('freelancer-rates', () => {
  describe('dayRate', () => {
    it('calculates given hourly rate, assuming 8-hour day', () => {
      expect(dayRate(1)).toBe(8);
      expect(dayRate(2)).toBe(2 * 8);
    });
    it('handles decimal values', () => {
      const ROUNDING_PRECISION = 6;
      //   expect(dayRate(97.654321)).toBe(97.654321 * 8);
      // floating point arithmetic is flaky - hence better to avoid toBe
      expect(dayRate(97.654321)).toBeCloseTo(97.654321 * 8, ROUNDING_PRECISION);
    });
  });
});
