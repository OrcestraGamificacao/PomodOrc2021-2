const colors = {
  white: '#fff',
  purple: '#1f2140',
  darkPurple: '#161a33',
  salmon: '#FF1250',
  gray: '#4e526a',
  lightGray: '#FE76FE',
};

const fonts = {
  family: 'Open Sans, sans-serif',
  size: '14px',
  lineHeight: '1.5',
  weight: {
    light: 300,
    normal: 400,
    bold: 600,
    bolder: 700,
  },
};

const sizes = {
  largeDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const zIndex = {
  tabs: 1,
  clockContent: 2,
  clockGauge: 1,
};

const shadows = {};

const theme = {
  main: {
    colors,
    fonts,
    sizes,
    zIndex,
    shadows,
  },
};

export default theme;
