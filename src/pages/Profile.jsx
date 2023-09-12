import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styled } from 'nativewind';
import Sidebar from '../components/Sidebar';
import DiseasesPage from './Diseases';
import { useNavigation, useRoute } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const Profile = ({ route }) => {

  navigation = useNavigation()

  const languages = ['English', 'Mandarin', 'Malay', 'Tamil'];
  const [selectedDiseases, setSelectedDiseases] = useState([{name: null}])
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  useEffect(() => {
    const getDiseases = async() => {
      const data = await AsyncStorage.getItem('diseases')
      const diseases = JSON.parse(data)
      console.log(diseases)
      setSelectedDiseases(diseases)
    }
    
    getDiseases()
  },[])


  const changeLanguage = () => {
    setSelectedLanguageIndex((selectedLanguageIndex + 1) % languages.length);
  };

  const forceUpdate = () => {
    // A dummy state to trigger a re-render
    setDummyState({});
  };

  const [dummyState, setDummyState] = React.useState({});
  // ... (previous code remains the same)

// ... (previous code remains the same)

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
        <StyledText className="text-black text-3xl font-semibold">Profile</StyledText>
      </StyledView>

      {/* Language Box and Change Button */}
      <StyledView className="flex-row justify-start items-center p-4">
        <StyledView className="flex flex-col items-start">
          {/* Row 1 */}
          <StyledView className="flex-row items-center mb-4">
            <StyledView className="w-[300px] h-[64px] bg-[#B5E3F2] flex justify-center items-center">
              <StyledText className="text-[#046DA8] text-3xl font-semibold">LANGUAGE</StyledText>
            </StyledView>
            <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
              <StyledText className="text-black text-3xl font-semibold">
                {languages[selectedLanguageIndex]}
              </StyledText>
            </StyledView>
            <StyledPressable
              className="w-[118px] h-[73px] ml-2 rounded-md bg-[#CEE5EC] flex justify-center items-center"
              onPress={changeLanguage}
            >
              <StyledText className="text-black text-3xl font-semibold">Change</StyledText>
            </StyledPressable>
          </StyledView>

          {/* Row 2 */}
          <StyledView className="flex-row items-center mb-4">
            <StyledView className="w-[300px] h-[64px] bg-[#B5E3F2] flex justify-center items-center">
              <StyledText className="text-[#046DA8] text-3xl font-semibold">AGE</StyledText>
            </StyledView>
            <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
              <StyledText className="text-black text-3xl font-semibold">60 to 70</StyledText>
            </StyledView>
            <StyledPressable
              className="w-[118px] h-[64px] ml-2 rounded-md bg-[#CEE5EC] flex justify-center items-center"
            >
              <StyledText className="text-black text-3xl font-semibold">Change</StyledText>
            </StyledPressable>
          </StyledView>

          {/* Row 3 (CHRONIC DISEASE) */}
          <StyledView className="flex-row items-center mb-4">
            <StyledView className="w-[300px] h-[64px] bg-[#B5E3F2] flex justify-center items-center">
              <StyledText className="text-[#046DA8] text-3xl font-semibold">CHRONIC DISEASE</StyledText>
            </StyledView>
            <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
              <FlatList
                className='flex flex-row text-center'
                data={selectedDiseases}
                renderItem={({item}) => <StyledText className="text-black text-3xl font-semibold self-center">{item.name}</StyledText>}
              />
            </StyledView>
            <StyledPressable
              className="w-[118px] h-[64px] ml-2 rounded-md bg-[#CEE5EC] flex justify-center items-center"
              onPress={() => navigation.navigate('Diseases')}
            >
              <StyledText className="text-black text-3xl font-semibold">Change</StyledText>
            </StyledPressable>
          </StyledView>

          {/* Row 4 */}
          <StyledView className="flex-row items-center">
            <StyledView className="w-[300px] h-[64px] bg-[#B5E3F2] flex justify-center items-center">
              <StyledText className="text-[#046DA8] text-3xl font-semibold">DIETARY NEEDS</StyledText>
            </StyledView>
            <StyledView className="w-[554px] h-[64px] bg-white flex justify-center items-center ml-0">
              <StyledText className="text-black text-3xl font-semibold">Vegetarian</StyledText>
            </StyledView>
            <StyledPressable
              className="w-[118px] h-[64px] ml-2 rounded-md bg-[#CEE5EC] flex justify-center items-center"
            >
              <StyledText className="text-black text-3xl font-semibold">Change</StyledText>
            </StyledPressable>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  </StyledView>
);
};

export default Profile;

