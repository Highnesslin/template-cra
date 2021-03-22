const setupPostcss = () => config => {
  require('react-app-rewire-postcss')(config, {
    plugins: _ => [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
      require('postcss-aspect-ratio-mini')({}),
      require('postcss-px-to-viewport')({
        viewportWidth: 1920,
        viewportHeight: 937,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false,
      }),
      require('postcss-write-svg')({
        utf8: false,
      }),
      require('postcss-viewport-units')({
        filterRule: rule =>
          rule.selector.includes('::after') &&
          rule.selector.includes('::before') &&
          rule.selector.includes(':after') &&
          rule.selector.includes(':before'),
      }),
      require('cssnano')({
        preset: 'advanced',
        autoprefixer: false,
        'postcss-zindex': false,
      }),
    ],
  });
  return config;
};
module.exports = setupPostcss;
