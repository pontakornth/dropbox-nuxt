/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

import plugin from 'tailwindcss/plugin'

module.exports = {
  theme: {},
  variants: {},
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
        a: {
          color: config('theme.colors.blue.500'),
          textDecoration: 'underline'
        }
      })
    })
  ]
}
