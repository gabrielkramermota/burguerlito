export function getBusinessStatus(date) {
  const day = date.getDay()
  const minutes = date.getHours() * 60 + date.getMinutes()
  const inRange = (v, s, e) => v >= s && v < e

  const isFriday = day === 5
  const isThurSatSun = day === 4 || day === 6 || day === 0

  const openFridayLunch = isFriday && inRange(minutes, 12 * 60, 17 * 60)
  const openEvening = isThurSatSun && inRange(minutes, 18 * 60 + 30, 23 * 60)

  return { open: openFridayLunch || openEvening }
}
