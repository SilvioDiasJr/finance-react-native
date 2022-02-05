function checkValidity(dateProduct, validityProduct) {
  const currentDate = new Date()
  const productDate = new Date(dateProduct)

  const currentDateFormatted = new Date(
    `${currentDate.getFullYear()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}`
  )

  const productDateFormatted = new Date(
    `${productDate.getFullYear()}/${
      productDate.getMonth() + 1
    }/${productDate.getDate()}`
  )

  const diffDates =
    (productDateFormatted - currentDateFormatted) / (1000 * 60 * 60 * 24)

  const validityFormatted = validityProduct.toLowerCase()
  const validity = Number(validityFormatted.replace('d', ''))

  if (diffDates + validity >= 0) {
    return {
      expired: false
    }
  } else {
    return {
      expired: true
    }
  }
}

console.log(checkValidity('2021-11-17T20:40:09.503Z', '80d'))
