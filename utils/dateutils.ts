function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export function getPreviousWeekToToday() {

  const today = new Date();

  const previousWeek = new Date();
  previousWeek.setDate(today.getDate() - 7);

  return {
    startDate: formatDate(previousWeek),
    endDate: formatDate(today)
  };

}