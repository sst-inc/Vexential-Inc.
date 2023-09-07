import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const LanguagesPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/startup_background.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
    >
      <StyledView className="flex flex-col items-center justify-center">
        <StyledText className="text-black text-3xl font-semibold mb-6">
          Language/语言/Bahasa/மொழி
        </StyledText>
        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md"
          onPress={() => {
            navigation.navigate('Instructions'); // Navigate to the Instructions page
          }}
        >
          <StyledText className="text-white text-lg font-semibold">English</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </ImageBackground>
  );
};

export default LanguagesPage;
