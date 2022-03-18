import { isNumber } from "./is-number";

export const formatFractionDigits = (value: number | string) => {
  const number = isNumber(value) ? value : Number(value)

  return digitsFormatter.format(number)
}

const digitsFormatter = new Intl.NumberFormat("en", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
