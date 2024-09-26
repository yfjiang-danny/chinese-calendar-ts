import { HOLIDAYS, WEEKEND_WORKDAYS } from "../src/define";
import { isHoliday, isWorkday } from "../src/index";

test("init", () => {
  const year = new Date().getFullYear().toString();

  const yearHolidays = HOLIDAYS[year];
  const weekendWorkdays = WEEKEND_WORKDAYS[year];

  expect(!!yearHolidays).toBe(true);
  expect(!!weekendWorkdays).toBe(true);

  Object.keys(yearHolidays).forEach((key) => {
    expect(isHoliday(new Date(key))).toBe(true);
  });

  Object.keys(yearHolidays).forEach((key) => {
    expect(isWorkday(new Date(key))).toBe(false);
  });

  Object.keys(weekendWorkdays).forEach((key) => {
    expect(isWorkday(new Date(key))).toBe(true);
  });

  Object.keys(weekendWorkdays).forEach((key) => {
    expect(isHoliday(new Date(key))).toBe(false);
  });
});
