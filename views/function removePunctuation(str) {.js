function removePunctuation(str) {
    return str.replace(/[^\w\s-]/g, '')
}

function nameToParts(name) {
    const inputAsArray = name.split(" ")
    const validName = ['', '', '', '']
    const validMiddleName = /\b([A-Z]|[a-z])\b.?/g
    const validSuffixes = ["Sr", "Jr", "II", "III", "IV"]
    if (inputAsArray[0].length > 1) validName.splice(0, 1, inputAsArray[0])
    inputAsArray.shift()
    inputAsArray.forEach(string => {
        if (string.match(validMiddleName)) validName.splice(1, 1, string)
        if (validSuffixes.includes(string)) validName.splice(3, 1, string)
        if (string.length > 1 && !string.match(validMiddleName) && !validSuffixes.includes(string)) validName.splice(2, 1, string)
    })
    return validName
}

console.log(nameToParts(removePunctuation("Dave M. Wolfberg Sr")))
console.log(nameToParts(removePunctuation("Dave Wolfberg Jr")))
console.log(nameToParts(removePunctuation("Dave M. Wolfberg II")))
console.log(nameToParts(removePunctuation("Dave Wolfberg")))