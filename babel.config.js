module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
   plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.tsx'],
        alias: {
          '@ui': './src/ui',
          '@components': './src/ui/components',
          '@features': './src/features',
          '@core': './src/core',
          '@utils': './src/utils',
          '@data': './src/data',
        },
      },
    ],
  ],
};
