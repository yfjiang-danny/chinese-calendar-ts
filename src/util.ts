export function format(date: Date, f: string) {
  switch (f) {
    case "YYYY-MM-DD": {
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
    }

    default:
      break;
  }
}
