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

function checkBrackets (str) {
  let arrFormStr = str.split('')
  let stack = []

  for (let i = 0; i < arrFormStr.length; i++) {
    let openBr = ['(', '{', '[', '<']
    let indexOpen = openBr.indexOf(arrFormStr[i])
    if (indexOpen !== -1) stack.push(indexOpen)
    let closeBr = [')', '}', ']', '>']
    let indexClose = closeBr.indexOf(arrFormStr[i])
    if (indexClose !== -1) {
      indexOpen = stack.pop()
      if (indexOpen !== indexClose) return false
    }
  }

  if (stack.length !== 0) return false

  return true
}

const str = '((])'
console.log(getBrackets(str))
console.log(checkBrackets(str))