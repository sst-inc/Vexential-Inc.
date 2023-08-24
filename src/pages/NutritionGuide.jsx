import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';



const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  return (
    <StyledView className="flex-1 flex-row">
      {/* Sidebar */}
      <StyledView className="w-44 h-full bg-blue-200">
        <Sidebar />
      </StyledView>

      {/* Main Content */}
      <StyledView className="flex-1 flex-col bg-blue-100 p-0">
        {/* Title */}
        <StyledView className="flex-row justify-center items-center p-4">
          <StyledText className="text-black text-4xl font-semibold">
            Nutrition Guide
          </StyledText>
        </StyledView>

        {/* Boxes */}
        <StyledView className="flex-col justify-center items-center">
          <StyledView className="w-[1000] h-[70] rounded-2xl bg-[#48A3E4] m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-white text-base font-semibold">
              Monthly Report
            </StyledText>
          </StyledView>
          <StyledView className="w-[1000] h-[70] rounded-2xl bg-[#E85151] m-1 border border-gray-400 flex justify-center items-center">
            <StyledText className="text-white text-base font-semibold">
              What to AVOID eating
            </StyledText>
          </StyledView>
        </StyledView>

        {/* YOUR NUTRITION GUIDE */}
        <StyledView className="flex-row justify-center items-center p-10">
          <StyledText className="text-black text-3xl font-semibold">
            YOUR NUTRITION GUIDE
          </StyledText>
        </StyledView>

        {/* Guide Text */}
        <ScrollView className="flex-1 p-0">
          <StyledText className="text-black text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu varius elit. Maecenas eu mattis augue. Praesent euismod rhoncus lorem eu venenatis. Vestibulum volutpat accumsan lorem in fringilla. Aliquam sollicitudin ligula metus, eu finibus turpis congue in. Nullam et blandit metus. Curabitur sed laoreet elit, vel ornare nibh. Mauris in purus vehicula odio sodales auctor. Integer quis egestas tortor, ac laoreet augue.

          </StyledText>
        </ScrollView>
      </StyledView>
    </StyledView>
  );
};

export default NutritionGuide;
