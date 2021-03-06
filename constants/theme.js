import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const CUSTOMFONT_REGULAR = 'ProductSans-Regular';
const CUSTOMFONT_BOLD = 'ProductSans-Bold';
const CUSTOMFONT_BLACK = 'ProductSans-Black';
const ITEM_SIZE = width * 0.8;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;
const CARD_WIDTH = width - 32;

export const COLORS = {
  default: '#000000',
  primary: '#FFFFFF',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  white: '#FFFFFF',
  black: '#000000',
  tabBar: '#121212',
  input: '#1D1D1D',
  blue: '#4C4498',
  gray: '#878787',
  gray1: '#666666',
  lightGray: '#F9FBFC',
  transparentBlack: 'rgba(0, 0, 0, 0.2)',
  transparentBlack1: 'rgba(0, 0, 0, 0.5)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  large: 40 + 'px',
  h1: 30 + 'px',
  h2: 22 + 'px',
  h3: 16 + 'px',
  h4: 14 + 'px',
  body1: 30 + 'px',
  body2: 22 + 'px',
  body3: 16 + 'px',
  body4: 14 + 'px',
  body5: 12 + 'px',

  // app dimensions
  width,
  height,

  // items
  itemSize: ITEM_SIZE,
  itemSpacing: ITEM_SPACING,
  cardWidth: CARD_WIDTH,
};

export const FONTS = {
  large: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.large,
    lineHeight: 40,
  },
  h1: {fontFamily: CUSTOMFONT_BLACK, fontSize: SIZES.h1, lineHeight: 36 + 'px'},
  h2: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h2, lineHeight: 30 + 'px'},
  h3: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h3, lineHeight: 22 + 'px'},
  h4: {fontFamily: CUSTOMFONT_BOLD, fontSize: SIZES.h4, lineHeight: 22 + 'px'},
  body1: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body1,
    lineHeight: 36 + 'px',
  },
  body2: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body2,
    lineHeight: 30 + 'px',
  },
  body3: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body3,
    lineHeight: 25 + 'px',
  },
  body4: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body4,
    lineHeight: 22 + 'px',
  },
  body5: {
    fontFamily: CUSTOMFONT_REGULAR,
    fontSize: SIZES.body5,
    lineHeight: 22 + 'px',
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
