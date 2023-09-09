import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);


const DiseasesPage = () => {
const navigation = useNavigation();
const route = useRoute();
const { ageRange } = route.params;


const [diseases, setDiseases] = useState([
{ id: 'diabetes', name: 'Diabetes', selected: false },
{ id: 'highBloodPressure', name: 'High Blood Pressure', selected: false },
// Add more diseases as needed
]);


const toggleDisease = (diseaseId) => {
setDiseases((prevDiseases) =>
prevDiseases.map((disease) =>
disease.id === diseaseId ? { ...disease, selected: !disease.selected } : disease
)
);
};


const selectedDiseases = diseases.filter((disease) => disease.selected);



const handleNextPress = async () => {
  // Check if startup pages have been shown before
  const startupPagesShown = await AsyncStorage.getItem('startupPagesShown');


  if (!startupPagesShown) {
  // If startup pages haven't been shown, navigate to them
  navigation.navigate('Languages'); // Start with the first startup page
  } else {
  // If startup pages have been shown, navigate to MealPlan
  navigation.navigate('MealPlan', { selectedDiseases });
  }
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
className={`w-80 h-14 rounded-md bg-blue-500 ${
disease.selected ? 'border border-white' : ''
} mt-2 flex-row items-center justify-center`}
onPress={() => toggleDisease(disease.id)}
>
{disease.selected && (
<StyledText className="text-white text-lg font-semibold mr-2">&#10003;</StyledText>
)}
<StyledText className="text-white text-lg">{disease.name}</StyledText>
</StyledTouchableOpacity>
))}
</StyledView>


<StyledTouchableOpacity
className="bg-blue-500 p-4 rounded-md absolute bottom-5 right-5"
onPress={handleNextPress}
>
<StyledText className="text-white text-lg font-semibold">Next</StyledText>
</StyledTouchableOpacity>
</StyledView>
</ImageBackground>
);
};












export default DiseasesPage;
