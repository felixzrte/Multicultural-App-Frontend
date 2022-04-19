import styled from 'styled-components';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import Constants from 'expo-constants';
const {width, height} = Dimensions.get('window');
const StatusBarHeight = Constants.StatusBarHeight;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: 15%;
  align-items: center;
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;
export const Logo = styled.Image`
  width: 80%;
  max-width: 600px;
  max-height: 250px;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: #e8e8e8;
  margin-vertical: 10px;
`;
export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${COLORS.blue};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;
export const SubTitle = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${COLORS.tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight
  `}
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${COLORS.secondary};
  width: 100%;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  padding-left: 50px;
  margin-vertical: 5px;
  height: 45px;
`;

export const StyledUpdateTextInput = styled.TextInput`
  background-color: ${COLORS.secondary};
  width: 100%;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 0px;
  padding-left: 10px;
  margin-vertical: 5px;
  height: 45px;
`;

export const StyledTextInputNoPadding = styled.TextInput`
  background-color: ${COLORS.secondary};
  width: 100%;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  padding-left: 10px;
  margin-vertical: 5px;
  height: 45px;
`;

export const StyledMultiLine = styled.TextInput`
  background-color: ${COLORS.secondary};
  width: 100%;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  padding-left: 10px;
  margin-vertical: 5px;
  height: 125px;
`;

export const StyledInputLabel = styled.Text`
  color: ${COLORS.tertiary};
  font-size: 13px;
  text-align: left;
  padding-left: 5px;
  margin-top: 10px;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 48%;
  position: absolute;
  z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 48%;
  position: absolute;
  z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${COLORS.blue};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;
export const ButtonText = styled.Text`
  color: ${COLORS.primary};
  font-size: 16px;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${COLORS.gray};
  margin-vertical: 10px;
`;
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${COLORS.tertiary};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const TextLinkContent = styled.Text`
  color: ${COLORS.blue};
  font-size: 15px;
`;

// Discover Page
export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const HeaderSection = styled.View`
  height: 30px;
  margin: 0px 16px;
  justify-content: space-between;
`;
export const Header2Section = styled.View`
  height: 30px;
  margin: 23px 16px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const BannerSection = styled.View`
  height: 180px;
  margin: 25px 16px 0px;
`;
export const ClubItemBox = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
export const BigClubLogo = styled.Image`
  width: 50px;
  height: 55px;
`;
export const EventItemBox = styled.View`
  width: 180px;
  height: 250px;
  border-radius: 10px;
  background-color: ${COLORS.lightGray};
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const AnnouncementItemBox = styled.View`
  width: ${SIZES.cardWidth};
  height: 180px;
  border-radius: 10px;
  background-color: #4C4478
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;