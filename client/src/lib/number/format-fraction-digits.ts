export const formatFractionDigits = (value: number) => {
  return digitsFormatter.format(value)
}

const digitsFormatter = new Intl.NumberFormat("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
