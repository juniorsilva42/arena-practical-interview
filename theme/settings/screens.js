const mediaScreenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '480px',
  tabletS: '481px',
  tabletL: '850px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobile: `(min-width: ${mediaScreenSizes.mobileS}) and (max-width: ${mediaScreenSizes.mobileL})`,
  tablet: `(min-width: ${mediaScreenSizes.tabletS}) and (max-width: ${mediaScreenSizes.tabletL})`,
  laptop: `(min-width: ${mediaScreenSizes.laptop})`,
  laptopL: `(min-width: ${mediaScreenSizes.laptopL})`,
  desktop: `(min-width: ${mediaScreenSizes.desktop})`,
  desktopL: `(min-width: ${mediaScreenSizes.desktop})`
};