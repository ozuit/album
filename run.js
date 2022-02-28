let result = []
for (i = 1; i <= process.argv[2]; i++) {
  result.push({ "l": `files/large/${i}.jpg` })
}
console.log(result)
