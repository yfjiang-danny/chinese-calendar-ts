# chinese-calendar-ts

Chinese calendar, include lunar calendar,holiday

## Install

```bash
npm install chinese-calendar-ts
```

## Usage

```typescript
import { isHoliday, isWorkday } from "chinese-calendar-ts";

// 2024-09-29 -> Sunday is workday becasue of National Day
console.log(isHoliday(new Date("2024-09-29"))); // false
console.log(isWorkday(new Date("2024-09-29"))); // true

// 2024-09-30 -> Normal Weekday
console.log(isHoliday(new Date("2024-09-30"))); // false
console.log(isWorkday(new Date("2024-09-30"))); // true

// 2024-10-01 -> National Day
console.log(isHoliday(new Date("2024-10-01"))); // true
console.log(isWorkday(new Date("2024-10-01"))); // false
```
