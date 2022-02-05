function frames(height, width) {
  const arrayWidth = []
  const arrayHeight = []

  if (width <= 0 && height <= 0) return

  for (let i = 0; i < width; i++) {
    arrayWidth.push('-')
  }

  for (let i = 0; i < height; i++) {
    arrayHeight.push('-')
  }

  const widthFormatted = arrayWidth.slice(1, arrayWidth.length - 1)
  const heightFormatted = arrayHeight.slice(1, arrayWidth.length - 1)

  if (height === 2) {
    console.log(`+ +`)
  } else {
    console.log(`+${height > 1 ? `${heightFormatted.join('')}+` : ''}`)
  }

  widthFormatted.forEach(() => {
    if (height > 1) {
      console.log(`-${heightFormatted.join('').replace(/-/g, ' ')}-`)
    } else {
      console.log(`-${heightFormatted.join('').replace(/-/g, ' ')}`)
    }
  })

  if (width > 1) {
    if (height === 2) {
      console.log(`+ +`)
    } else {
      console.log(`+${height > 2 ? `${heightFormatted.join('')}+` : ''}`)
    }
  }
}

frames(1, 3)
