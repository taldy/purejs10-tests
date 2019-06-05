import { getWorkingDaysCount } from './date-helper';

export function updateTaskDuration(task) {
  task.duration = getWorkingDaysCount(task.startDate, task.endDate);
  return task;
}
