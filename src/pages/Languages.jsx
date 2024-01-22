import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import i18n from '../../i18n'; // This goes up two levels from the current directory


const StyledView = styled(View);
const StyledText = styled(Text); // Ensure StyledText is used for text components
const StyledTouchableOpacity = styled(TouchableOpacity);

const LanguagesPage = () => {
  const navigation = useNavigation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    navigation.navigate('Instructions'); // Assuming 'Instructions' screen will handle language changes
  };

  return (
    <ImageBackground
      source={require('../../assets/startup_background.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>
      <StyledView className="flex flex-col items-center justify-center">
        <StyledText className="text-black text-3xl font-semibold mb-6">
          {i18n.t('welcome')} {/*This will display the welcome message based on the selected language*/}
        </StyledText>
        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md"
          onPress={() => changeLanguage('en')}>
          <StyledText className="text-white text-lg font-semibold">English</StyledText>
        </StyledTouchableOpacity>
        {/* Add the Chinese language option */}
        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md mt-4"
          onPress={() => changeLanguage('zh')}>
          <StyledText className="text-white text-lg font-semibold">语言</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </ImageBackground>
  );
};

export default LanguagesPage;
