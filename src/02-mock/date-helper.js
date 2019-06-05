import moment from 'moment';

export function getWorkingDaysCount(startDate, endDate) {
  let current = moment(startDate).startOf('day');
  let end = moment(endDate).endOf('day');
  let workingDaysCount = 0;

  while (current.isBefore(end)) {
    if (current.isoWeekday() < 6){
      workingDaysCount++;
    }

    current.add(1, 'day');
  }

  return workingDaysCount;
}
