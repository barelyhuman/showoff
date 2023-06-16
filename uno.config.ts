import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttibutify from '@unocss/preset-attributify'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  cli: {
    entry: [
      {
        patterns: [
          'pages/**/*.{js,ts}',
          'layouts/**/*.{js,ts}',
          'components/**/*.{js,ts}',
        ],
        outFile: 'public/uno.css',
      },
    ],
  },
  presets: [
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
        mono: 'JetBrains Mono',
      },
    }),
    presetUno(),
    presetAttibutify(),
  ],
})
