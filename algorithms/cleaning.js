function cleaning(object) {
  for (const key in object) {
    if (object[key] === null) {
      delete object[key]
    }
  }

  return object
}

console.log(
  cleaning({
    fizz: 'buzz',
    foo: null,
    bar: 42
  })
)
