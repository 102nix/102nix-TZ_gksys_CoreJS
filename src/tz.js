function getBrackets (str) {
  const validateBrackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
    '<' : '>'
  }
  let arrFormStr = str.split('')
  let stack = []
  let result = ''

  arrFormStr.forEach(bracket => {
    let currentVal = bracket
    if (validateBrackets[currentVal]) {
      stack.push(currentVal)
    } else {
      if (stack.length === 0) return null
      currentVal = validateBrackets[stack.pop()]
    }
    result += currentVal
  })
  return result
}

const str = '([))'
console.log(getBrackets(str))