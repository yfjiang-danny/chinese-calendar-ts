import { isHoliday } from "../src/index";

test("init", () => {
  // Weekday
  expect(isHoliday(new Date("2024-03-25"))).toBe(false);
  expect(isHoliday(new Date("2024-03-26"))).toBe(false);
  expect(isHoliday(new Date("2024-03-27"))).toBe(false);
  expect(isHoliday(new Date("2024-03-28"))).toBe(false);
  expect(isHoliday(new Date("2024-03-29"))).toBe(false);

  // Weekend
  expect(isHoliday(new Date("2024-03-30"))).toBe(true);
  expect(isHoliday(new Date("2024-03-31"))).toBe(true);

  // 清明
  expect(isHoliday(new Date("2024-04-04"))).toBe(true);
  expect(isHoliday(new Date("2024-04-05"))).toBe(true);
  expect(isHoliday(new Date("2024-04-06"))).toBe(true);
});
