import { css } from 'styled-components'

import LucidaSans from '../fonts/LucidaSans.ttf'
import LucidaSansBold from '../fonts/LucidaSansBold.ttf'
import Lucidasansdemibold from '../fonts/lucidasansdemibold.ttf'
import LucidaSansItalic from '../fonts/LucidaSansItalic.ttf'
import LucidaSansRegular from '../fonts/LucidaSansRegular.ttf'

import { FontFamily } from './variables'

export const FONT_FACES = css`
  @font-face {
    font-family: ${FontFamily};
    src: url(${LucidaSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: ${FontFamily};
    src: url(${LucidaSansBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: block;
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url(${Lucidasansdemibold}) format('truetype');
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: italic;
    font-weight: 400;
    font-display: block;
    src: url(${LucidaSansItalic}) format('truetype');
  }

  @font-face {
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url(${LucidaSansRegular}) format('truetype');
  }
`
