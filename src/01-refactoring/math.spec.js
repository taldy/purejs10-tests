import { sum } from './math';

describe('Math module', () => {
  describe('sum()', () => {
    it('1 + 2 should be equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    it('should replace uncorrect first param with 0', () => {
      expect(sum(null, 4)).toBe(4);
    });

    it('should replace uncorrect second param with 0', () => {
      expect(sum(5, 'aaa')).toBe(5);
    });

    it('should support more than 2 params', () => {
      expect(sum(5, 1, 2)).toBe(8);
    });

    it('should support more than 2 params (10)', () => {
      expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    });

    it('should still support replace incorrect params with 0', () => {
      expect(sum(1, 'as', null, false, {}, '2')).toBe(3);
    });
  });
});
