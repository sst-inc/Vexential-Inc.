import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledView = styled(View);
const StyledText = styled(Text);

const NutritionGuide = () => {
  const route = useRoute(); // Use useRoute to access route parameters

  // Access selectedDiseases from route.params

  const [selectedDiseases, setSelectedDiseases] = useState([{name: null}])

  useEffect(() => {
    const getDiseases = async() => {
      const data = await AsyncStorage.getItem('diseases')
      const diseases = JSON.parse(data)
      console.log(diseases)
      setSelectedDiseases(diseases)
    }
    
    getDiseases()
  },[])


  // Define content for each disease
  const diseaseContent = {
    Diabetes: {
      title: 'Diabetes',
      description: (
        <>
          <StyledText className="text-black text-2xl font-semibold">
            Plate method: 50% nonstarchy vegetables, 25% lean protein, 25% high-fiber carbohydrates
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            <StyledText className="text-black text-2xl font-semibold">Vegetables include:</StyledText> {'\n'}
            Broccoli, spinach, kale, cauliflower, bell peppers, asparagus, mushrooms, cucumbers, celery,
            cabbage, Brussels sprouts, green beans, eggplant, tomatoes, radishes, lettuce, bok choy, bean sprouts
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            <StyledText className="text-black text-2xl font-semibold">Lean protein include:</StyledText> {'\n'}
            Chicken breast, turkey breast, fish (salmon, tuna, tilapia), shrimp, lean cuts of beef (sirloin,
            tenderloin), tofu, tempeh
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            <StyledText className="text-black text-2xl font-semibold">High fiber carbohydrates:</StyledText> {'\n'}
            Oats, quinoa, brown rice, whole wheat pasta, Lentils, chickpeas, black beans
          </StyledText> {'\n'}
          <StyledText className="text-black text-2xl font-semibold">Avoid:</StyledText> {'\n'}
          <StyledText className='text-xl'>
          High sugar content {'\n'}
          Refined carbohydrates {'\n'}
          Less carbohydrates
          </StyledText>
        </>
      ),
    },
    HighBloodPressure: {
      title: 'High Blood Pressure (Hypertension)',
      description: (
        <>
          <StyledText className="text-black text-2xl font-semibold">
            Plate method: 50% non-starchy vegetables, 25% lean protein, 25% grain
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            Food that will lower their blood pressure:
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            Unsweetened yogurt {'\n'}
            High amounts of the minerals calcium, potassium, and magnesium {'\n'}
            Berries {'\n'}
            rich in antioxidant compounds called anthocyanins {'\n'}
            Beets {'\n'}
            high in nitric oxide {'\n'}
            Sweet potatoes {'\n'}
            Loaded with magnesium, potassium, and fiber {'\n'}
            Leafy greens {'\n'}
            High in nitrates {'\n'}
            Fatty fish {'\n'}
            Omega 3, Vitamin D {'\n'}
            Wholegrain {'\n'}
            beta-glucan {'\n'}
            Pistachios {'\n'}
            Bananas {'\n'}
            Kiwifruit {'\n'}
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            Non-Starchy vegetables: {'\n'}
            Broccoli, spinach, kale, cauliflower, bell peppers, asparagus, mushrooms, cucumbers, celery,
            cabbage, Brussels sprouts, green beans, eggplant, tomatoes, radishes, lettuce, bok choy, bean sprouts, carrots
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            Lean protein: {'\n'}
            Chicken breast, turkey breast, fish (salmon, tuna, tilapia), shrimp, lean cuts of beef (sirloin,
            tenderloin), tofu, tempeh
          </StyledText> {'\n'}
          <StyledText className='text-xl'>
            Grain: {'\n'}
            Brown rice, quinoa, oats, whole wheat, buckwheat, wild rice, whole grain pasta, whole wheat bread, whole grain tortillas
          </StyledText> {'\n'}
          <StyledText className="text-black text-2xl font-semibold">Avoid:</StyledText> {'\n'}
          <StyledText className='text-xl'>
            Limit sodium intake {'\n'}
            Processed and canned food
          </StyledText>
        </>
      ),
    },
    
    // Add content for other diseases if needed
  };

  // Function to generate content based on selected diseases
  const generateContent = () => {
    return selectedDiseases.map((selectedDisease) => {
      const content = diseaseContent[selectedDisease.id];

      if (content) {
        return (
          <View key={content.title}>
            <StyledText className="text-black text-2xl font-semibold">{content.title}</StyledText>
            <StyledText>{content.description}</StyledText>
            {/* Add more content specific to the disease */}
          </View>
        );
      } else {
        return null; // Return null for unsupported diseases
      }
    });
  };

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
          <StyledText className="text-black text-4xl font-semibold">Nutrition Guide</StyledText>
        </StyledView>

        {/* Boxes */}


        {/* YOUR NUTRITION GUIDE */}
        <StyledView className="flex-row justify-center items-center p-10">
          <StyledText className="text-black text-2xl font-semibold">YOUR NUTRITION GUIDE</StyledText>
        </StyledView>

        {/* Guide Text */}
        <ScrollView className="flex-1 p-0">
          {/* Generate content based on selected diseases */}
          {generateContent()}
        </ScrollView>
      </StyledView>
    </StyledView>
  );
};

export default NutritionGuide;
