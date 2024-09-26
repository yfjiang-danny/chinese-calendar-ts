import { HOLIDAYS, WEEKEND_WORKDAYS } from "./define";
import { HolidayType } from "./type";
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

  if (key) {
    if (yearHolidays[key]) return true;
    if (weekendWorkdays[key]) return false;
  }

  const day = date.getDay();

  return day < 1 || day > 5;
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

  if (key) {
    if (weekendWorkdays[key]) return true;
    if (yearHolidays[key]) return false;
  }

  const day = date.getDay();

  return day > 0 && day < 6;
}

function getHolidayTypes() {
  return ["元旦", "春节", "清明节", "端午节", "劳动节", "中秋节", "国庆节"];
}

function getHolidayDays(type: HolidayType, date = new Date()) {
  const year = date.getFullYear().toString();
  const yearHolidays = HOLIDAYS[year];
  if (!yearHolidays) {
    throw new Error("Over scope");
  }
  const res: string[] = [];
  Object.keys(yearHolidays).forEach((v) => {
    if (yearHolidays[v] === type) {
      res.push(v);
    }
  });

  return res;
}

export { isHoliday, isWorkday, getHolidayTypes, getHolidayDays };
