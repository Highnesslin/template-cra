module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false,
    },
    'postcss-cssnext': {}, // 转换cssnext的calc和var等css计算语法
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 视窗的宽度，对应的是我们设计稿的宽度，移动端一般是750，如果是pc端那就是类似1920这样的尺寸
      viewportHeight: 937, // 视窗的高度，移动端一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，使用屏幕宽度进行适配
      selectorBlackList: ['.amap-'], // 过滤不转换的选择器
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
      mediaQuery: true, // 允许在媒体查询中转换`px`
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
    'postcss-viewport-units': {},
    cssnano: {
      preset: 'default', // 设置成default将不会启用autoprefixer
      'postcss-zindex': false,
    },
  },
};
