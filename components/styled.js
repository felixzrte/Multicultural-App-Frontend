import styled from 'styled-components';
import {COLORS, SIZES, FONTS, icons} from '../constants';

const McText = styled.Text`
  color: ${(props) => (props.color ? props.color : COLORS.default)};
  ${({h1, h2, h3, h4}) => {
    switch (true) {
      case h1: {
        return FONTS.h1;
      }
      case h2: {
        return FONTS.h2;
      }
      case h3: {
        return FONTS.h3;
      }
      case h4: {
        return FONTS.h4;
      }
    }
  }}
  ${({body1, body2, body3, body4, body5}) => {
    switch (true) {
      case body1: {
        return FONTS.body1;
      }
      case body2: {
        return FONTS.body2;
      }
      case body3: {
        return FONTS.body3;
      }
      case body4: {
        return FONTS.body4;
      }
      case body5: {
        return FONTS.body5;
      }
    }
  }}
`;

const McIcon = styled.Image`
  width: ${(props) => (props.size ? props.size : 16)};
  height: ${(props) => (props.size ? props.size : 16)};
`;
const McAvatar = styled.Image`
  width: ${(props) => (props.size ? props.size : 40)};
  height: ${(props) => (props.size ? props.size : 40)};
`;

export {McText, McIcon, McAvatar};
