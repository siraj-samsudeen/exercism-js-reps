import { dayRate } from './freelancer-rates';
describe('freelancer-rates', () => {
  it('dayRate calculates given hourly rate, assuming 8-hour day', () => {
    expect(dayRate(1)).toBe(8);
  });
});
