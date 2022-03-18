export const getTime = (date: Date) => {
  return timeFormatter.format(date)
}

const timeFormatter = new Intl.DateTimeFormat("en", {
  hour12: false,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
