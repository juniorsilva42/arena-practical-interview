import { css } from 'styled-components';

import LatoLight from '../../public/assets/fonts/Lato-Light.ttf';
import LatoRegular from '../../public/assets/fonts/Lato-Regular.ttf';
import LatoBlack from '../../public/assets/fonts/Lato-Black.ttf';

export const LoadFonts = css`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(${LatoLight}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(${LatoRegular}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(${LatoBlack}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
`;
