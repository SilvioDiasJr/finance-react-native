function fibonacci(number) {
  const result = [0, 1]

  for (let i = 2; i < number; i++) {
    result.push(result[i - 2] + result[i - 1])
  }
  return result
}

console.log(fibonacci(6))
