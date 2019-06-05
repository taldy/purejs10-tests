import { updateTaskDuration } from './tasks';
import * as dateHelper from './date-helper';

describe('tasks', () => {
  describe('updateTaskDuration(): ', () => {
    it('should call getWorkingDaysCount() and get duration from it', () => {
      const task = {
        startDate: '2019-05-29T12:00:00+00:00',
        endDate: '2019-05-30T12:00:00+00:00',
        duration: 1
      };

      const expectedTask = {
        startDate: '2019-05-29T12:00:00+00:00',
        endDate: '2019-05-30T12:00:00+00:00',
        duration: 2
      };

      dateHelper.getWorkingDaysCount = jest.fn().mockReturnValue(2);

      expect(updateTaskDuration(task)).toEqual(expectedTask);
      expect(dateHelper.getWorkingDaysCount).toHaveBeenCalledWith(task.startDate, task.endDate);
    });

    it('should call getWorkingDaysCount() and get duration from it (real call)', () => {
      const task = {
        startDate: '2019-05-29T12:00:00+00:00',
        endDate: '2019-05-30T12:00:00+00:00',
        duration: 1
      };

      const expectedTask = {
        startDate: '2019-05-29T12:00:00+00:00',
        endDate: '2019-05-30T12:00:00+00:00',
        duration: 2
      };

      const spy = jest.spyOn(dateHelper, 'getWorkingDaysCount');

      expect(updateTaskDuration(task)).toEqual(expectedTask);
      expect(spy).toHaveBeenCalledWith(task.startDate, task.endDate);
    });
  });
});
