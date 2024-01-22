import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const AgePage = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleAgeSelection = (ageRange) => {
    // Navigate to the Diseases page with the selected age range
    navigation.navigate('Diseases', { ageRange });
  };

  return (
    <ImageBackground
      source={require('../../assets/startup_background.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>
      <StyledView className="flex flex-col items-center justify-center">
      <StyledText className="text-black text-4xl font-semibold mb-6">
        {t('age.prompt')}
      </StyledText>

        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md mb-4"
          onPress={() => handleAgeSelection('60-70')}>
          <StyledText className="text-white text-lg font-semibold">{t('age.range60to70')}</StyledText>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md mb-4"
          onPress={() => handleAgeSelection('70-80')}>
          <StyledText className="text-white text-lg font-semibold">{t('age.range70to80')}</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md mb-4"
          onPress={() => handleAgeSelection('80-90')}>
          <StyledText className="text-white text-lg font-semibold">{t('age.range80to90')}</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md mb-4"
          onPress={() => handleAgeSelection('90-100')}>
          <StyledText className="text-white text-lg font-semibold">{t('age.range90to100')}</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </ImageBackground>
  );
};

export default AgePage;
