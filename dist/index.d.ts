/**
 * 是否是假日
 * @param date
 * @returns
 */
declare function isHoliday(date: Date): boolean;
/**
 * 是否是工作日，包括调休
 * @param date
 * @returns
 */
declare function isWorkday(date: Date): boolean;
export { isHoliday, isWorkday };
