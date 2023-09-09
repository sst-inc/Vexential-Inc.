import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const InstructionsPage = () => {
const navigation = useNavigation();


const handleNextPress = () => {
// Navigate to the "Age" page
navigation.navigate('Age');
};


return (
<ImageBackground
source={require('../../assets/startup_background.png')}
style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
>
<StyledView className="flex flex-col items-center justify-center">
<StyledText className="text-black text-6xl font-semibold mb-6">INSTRUCTIONS</StyledText>
<StyledText className="text-black text-3xl text-center mb-6">
We will be asking you a few questions to complete your profile. Please choose the option
that describes you.
</StyledText>
<StyledTouchableOpacity
className="bg-blue-500 p-4 rounded-md"
onPress={handleNextPress}
>
<StyledText className="text-white text-lg font-semibold">Next</StyledText>
</StyledTouchableOpacity>
</StyledView>
</ImageBackground>
);
};


export default InstructionsPage;