module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['inline-dotenv'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@global': './src/global',
            '@assets': './src/assets',
            '@services': './src/services'
          }
        }
      ]
    ]
  }
}
