import { css, FlattenSimpleInterpolation } from 'styled-components'

import { FontFamily } from './variables'

/**
 *
 * @param size size
 * @returns media query
 */
export const MinQueriesSize = (size: number): FlattenSimpleInterpolation =>
  css`
    @media (min-width: ${size}px);
  `

/**
 *
 * @param size size
 * @returns media query
 */
export const MaxQueriesSize = (size: number): FlattenSimpleInterpolation =>
  css`
    @media (max-width: ${size - 1}px);
  `

/**
 *
 * @param min min
 * @param max max
 * @returns media query
 */
export const MinMaxQueriesSize = (
  min: number,
  max: number
): FlattenSimpleInterpolation =>
  css`
    @media (min-width: ${min}px) and (max-width: ${max - 1}px);
  `

/**
 * @param setting css strgin
 * @returns css
 */
export const CustomCssSettings = (
  setting: string //TODO: add enhanced type to handle valid css configuration
): FlattenSimpleInterpolation =>
  css`
    ${setting}
  `

export const FLEX_CENTER = css`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const RESET_BUTTON = css`
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`

/**
 *
 * @param size font size
 * @param  fw font weight
 * @param  style font style
 * @returns font css
 */
export const CONFIGURE_FONT = (
  size: string,
  fw: number,
  style = 'normal'
): FlattenSimpleInterpolation => css`
  font-family: ${FontFamily};
  font-size: ${size || '12px'};
  font-weight: ${fw || 400} !important;
  font-style: ${style || 'normal'};
`

/**
 *
 * @param  width width
 * @param  height height
 * @returns css style
 */
export const SCROLL_STYLE = (
  width = 0,
  height = 0
): FlattenSimpleInterpolation => css`
  ::-webkit-scrollbar {
    width: ${width}px;
    height: ${height}px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #ededed;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }
`

export const LATERAL_PADDING = css`
  padding: 0 24px;
`

export const COMMON_BOX_SHADOW = css`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.16);
`
