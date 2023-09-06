import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const DiseasesPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { ageRange } = route.params;

  const [diseases, setDiseases] = useState([
    { id: 'diabetes', name: 'Diabetes', selected: false },
    { id: 'hypertension', name: 'Hypertension', selected: false },
    { id: 'heartDisease', name: 'Heart Disease', selected: false },
    { id: 'stroke', name: 'Stroke', selected: false },
    { id: 'lungDisease', name: 'Lung Disease', selected: false },
  ]);

  const toggleDisease = (diseaseId) => {
    setDiseases((prevDiseases) =>
      prevDiseases.map((disease) =>
        disease.id === diseaseId ? { ...disease, selected: !disease.selected } : disease
      )
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/startup_background.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
    >
      <StyledView className="flex flex-col items-center justify-center">
        <StyledText className="text-black text-4xl font-semibold mb-6">
          Selected Age Range: {ageRange}
        </StyledText>
        <StyledText className="text-black text-3xl text-center mb-6">
          Do you have any of these chronic diseases?
        </StyledText>
        <StyledView className="flex-col items-center">
        {diseases.map((disease) => (
            <StyledTouchableOpacity
            key={disease.id}
            className={`w-80 h-20 rounded-md bg-blue-500 ${
                disease.selected ? 'border border-white' : ''
            } mt-2 flex-row items-center justify-center`}
            onPress={() => toggleDisease(disease.id)}
            >
            {disease.selected && (
                <StyledText className="text-white text-lg font-semibold mr-2">&#10003;</StyledText>
            )}
            </StyledTouchableOpacity>
        ))}
        </StyledView>

        <StyledTouchableOpacity
          className="bg-blue-500 p-4 rounded-md absolute bottom-5 right-5"
          onPress={() => {
            // Handle button press, e.g., navigate to the next screen
          }}
        >
          <StyledText className="text-white text-lg font-semibold">Next</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </ImageBackground>
  );
};

export default DiseasesPage;
