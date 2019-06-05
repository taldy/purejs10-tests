import { getWorkingDaysCount } from './date-helper';

describe('date-helper', () => {
  describe('getWorkingDaysCount(): ', () => {
    it('sibling working days (wed-thu)', () => {
      expect(getWorkingDaysCount('2019-05-29T12:00:00+00:00', '2019-05-30T12:00:00+00:00')).toBe(2);
    });

    it('same working day (wed-wed)', () => {
      expect(getWorkingDaysCount('2019-05-29T12:00:00+00:00', '2019-05-29T12:00:00+00:00')).toBe(1);
    });

    it('working days accross the weekend (wed-tue)', () => {
      expect(getWorkingDaysCount('2019-05-29T12:00:00+00:00', '2019-06-04T12:00:00+00:00')).toBe(5);
    });

    it('fri-sat', () => {
      expect(getWorkingDaysCount('2019-05-31T12:00:00+00:00', '2019-06-01T12:00:00+00:00')).toBe(1);
    });

    it('only weekends sat-sun', () => {
      expect(getWorkingDaysCount('2019-06-01T12:00:00+00:00', '2019-06-02T12:00:00+00:00')).toBe(0);
    });
  });
});
