export const getDate = (date: Date) => {
  return `${dayFormatter.format(date)} ${monthsFormatter.format(date)} ${yearFormatter.format(date)}`
}

const dayFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
});

const monthsFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
});

const yearFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric"
});
