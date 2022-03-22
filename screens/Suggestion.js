import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import AppleHeader from 'react-native-apple-header';
import {StatusBar} from 'expo-status-bar';
import ClubCard from '../components/ClubCard';
import {McIcon, McText, CustomButton} from '../components';
import {Container, SubHeader, HeaderSection, Line} from '../constants/styles';

const Suggestion = () => {
  return (
    <Container>
      <HeaderSection>
        <McText h1>Suggestions</McText>
        <McText style={{marginTop: 10}} body4 color="gray">
          Explore all the different club merchandise!
        </McText>
        <Line />
      </HeaderSection>
    </Container>
  );
};

export default Suggestion;
