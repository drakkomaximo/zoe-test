import { createGlobalStyle } from 'styled-components'

import { FONT_FACES } from './typography'
import { FontFamily } from './variables'

export const GlobalStyle = createGlobalStyle`
  ${FONT_FACES}

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    font-family: ${FontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
  }

  html {
    /* Primary Colors */
    --primary: #1D6A58;
    --primary-medium: #00B188;
    --primary-light: #72D2BC;
    --primary-extra-light: #C0EFE4;
    --primary-extra-darken: #001712;
    --primary-darken: #1B2F2A;
    --gray-dark: #6E7472;
    --gray-medium: #999999;
    --gray-light: #E0E0E0;
    --light: #FFFFFF;
    /* Feedback Colors */
    /* Info */
    --info-dark: #0084F4;
    --info-medium: #4EAEFF;
    --info-light: #A6D6FF;
    /* Danger */
    --danger-dark: #FF4949;
    --danger-medium: #FF9999;
    --danger-light: #FDC7C7;
    /* Success */
    --success-dark: #13CE66;
    --success-medium: #6CCA95;
    --success-light: #CEE3D7;
    /* Warning */
    --warning-dark: #FFC82C;
    --warning-medium: #FFDD7D;
    --warning-light: #FFEDB9;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${FontFamily};
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    font-weight: normal;
  }
`
