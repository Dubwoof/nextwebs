export function calculateYearsFromDate(dateString: string): number {
  const inputDate = new Date(dateString);
  const today = new Date();
  const diffYears = today.getFullYear() - inputDate.getFullYear();
  return today < new Date(today.getFullYear(), inputDate.getMonth(), inputDate.getDate()) ? diffYears - 1 : diffYears;
}
