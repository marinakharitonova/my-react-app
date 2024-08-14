export const formatUrlGetParamsFromObject = <T>(object: T): string => {
  let result = ''
  for (const key in object) {
    if (typeof object[key] !== 'undefined') {
      result += `${key}=${object[key]}&`
    }
  }
  if (result) {
    result = `?${result.slice(0, -1)}`
  }
  return result
}
