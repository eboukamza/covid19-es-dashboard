const calculatePct = (current, previous) => {
  if (!current || !previous) return;

  return ((current / previous) * 100 - 100).toFixed(2)
}

let numberFormat = new Intl.NumberFormat('es-ES');
const format = value =>
  numberFormat.format(value)

const calculateActiveCases = ({cases, deaths, recovered}) =>
  cases ? cases - (deaths || 0) - (recovered || 0) : undefined


export { calculatePct, calculateActiveCases, format }