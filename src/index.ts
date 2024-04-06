import { HOLIDAYS, WEEKEND_WORKDAYS } from "./define";
import { format } from "./util";

/**
 * 是否是假日
 * @param date
 * @returns
 */
function isHoliday(date: Date) {
  const year = date.getFullYear().toString();
  const yearHolidays = HOLIDAYS[year];
  const weekendWorkdays = WEEKEND_WORKDAYS[year];
  if (!yearHolidays || !weekendWorkdays) {
    throw new Error("Over scope");
  }
  const key = format(date, "YYYY-MM-DD");

  const day = date.getDay();
  const isWeekend = day === 0 || day > 5;

  if (key) {
    if (yearHolidays[key] || (isWeekend && !weekendWorkdays[key])) return true;
  }
  return isWeekend;
}

/**
 * 是否是工作日，包括调休
 * @param date
 * @returns
 */
function isWorkday(date: Date) {
  const year = date.getFullYear().toString();
  const yearHolidays = HOLIDAYS[year];
  const weekendWorkdays = WEEKEND_WORKDAYS[year];
  if (!yearHolidays || !weekendWorkdays) {
    throw new Error("Over scope");
  }
  const key = format(date, "YYYY-MM-DD");

  const day = date.getDay();
  const isWeekend = day === 0 || day > 5;

  if (key) {
    if (weekendWorkdays[key] || (!isWeekend && !yearHolidays[key])) return true;
  }
  return !isWeekend;
}

export { isHoliday, isWorkday };
