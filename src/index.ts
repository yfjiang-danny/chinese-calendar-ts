import { HOLIDAYS, WEEKEND_WORKDAYS } from "./define";
import { format } from "./util";

function isHoliday(date: Date) {
  const yearHolidays = HOLIDAYS[date.getFullYear().toString()];
  if (!yearHolidays) {
    throw new Error("Over scope");
  }
  const key = format(date, "YYYY-MM-DD");

  const day = date.getDay();
  const isWeekend = day === 0 || day > 5;

  if (key) {
    if (yearHolidays[key] || (isWeekend && !WEEKEND_WORKDAYS[key])) return true;
  }
  return isWeekend;
}

export { isHoliday };
