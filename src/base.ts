export const toString = (value: any) => Object.prototype.toString.call(value)
export function getTypeName(value: any) {
  if (value === null)
    return 'null'

  const type = toString(value).slice(8, -1).toLocaleLowerCase()
  return (typeof value === 'object' || typeof value === 'function') ? type : typeof value
}
