// 拍平多维数组
export const flattenArray = (arr, key) => {
  const result = []

  arr.forEach((item) => {
    if (Array.isArray(item[key])) {
      result.push(...flattenArray(item[key]))
    } else {
      result.push(item)
    }
  })

  return result
}
