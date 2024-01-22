import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const InstructionsPage = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();


  const handleNextPress = () => {
    // Navigate to the "Age" page
    navigation.navigate('Age');
  };

  return (
    <ImageBackground
      source={require('../../assets/startup_background.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>
      <StyledView className="flex flex-col items-center justify-center">
      <StyledText className="text-black text-6xl font-semibold mb-6">
        {t('instructions.title')}
      </StyledText>
      <StyledText className="text-black text-3xl text-center mb-6">
        {t('instructions.description')}
      </StyledText>

      <StyledTouchableOpacity className="bg-blue-500 p-4 rounded-md" onPress={handleNextPress}>
        <StyledText className="text-white text-lg font-semibold">{t('common.next')}</StyledText>
      </StyledTouchableOpacity>

      </StyledView>
    </ImageBackground>
  );
};

export default InstructionsPage;
