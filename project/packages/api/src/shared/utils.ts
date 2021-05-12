export function getCurrentDate() {
  const now = new Date()
  const MM = now.getMonth() + 1
  const DD = now.getDate()

  const yyyymmdd = [
    now.getFullYear(),
    (MM > 9 ? '' : '0') + MM,
    (DD > 9 ? '' : '0') + DD,
  ].join('-')

  const hh = now.getHours()
  const mm = now.getMinutes()
  const ss = now.getSeconds()

  const hhmmss = [
    (hh > 9 ? '' : '0') + hh,
    (mm > 9 ? '' : '0') + mm,
    (ss > 9 ? '' : '0') + ss,
  ].join(':')

  return `${yyyymmdd} ${hhmmss}`
}
