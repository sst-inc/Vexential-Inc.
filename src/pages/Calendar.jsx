import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import Sidebar from '../components/Sidebar';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledView = styled(View);
const StyledText = styled(Text);

const Calendar = ({ item, route }) => {

  const navigation = useNavigation();

  const { dayNumber, selectedDiseases } = route.params;
  const [ mealData, setMealData ] = useState([]);
  const [ loading, setLoading ] = useState(true)

  const navigateToMealInfo = (meal) => {
    navigation.navigate('MealInfo', {
      foodItem: meal // Pass foodItem instead of meal
    });
  };

  useEffect(() => {
    const getData = async(i) => {
      let data = await AsyncStorage.getItem(String(i))
      let food = await JSON.parse(data)
      return food
    }
    const getFood = async() => {
      for (let i = 1; i < 8; i++) {
        let foodResult = await getData(i)
        currentMealArray = mealData
        currentMealArray.push(foodResult)
        setMealData(currentMealArray)
      }
      setLoading(!loading)
    }
    getFood()
  },[]);

  if (loading) {
    return (
      <StyledView>
        <StyledText>
          Loading
        </StyledText>
      </StyledView>
    )
  } else {
    return (
      <StyledView className="flex-1 flex-row">
        {/* Sidebar */}
        <StyledView className="w-44 h-full bg-blue-200">
          <Sidebar />
        </StyledView>
  
        {/* Main Content */}
        <StyledView className="flex-1 flex-col bg-blue-100 p-0 overflow-scroll">
          {/* Calendar Title */}
          <StyledView className="flex-row justify-center items-center p-4">
            <StyledText className="text-black text-xl font-semibold">Calendar</StyledText>
          </StyledView>
  
          {/* Top Row: Empty Space, Breakfast, Lunch, Dinner */}
          <StyledView className="flex-row justify-center items-center">
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              {/* Empty Space */}
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <StyledText className="text-black font-semibold text-center text-lg">
                BREAKFAST
              </StyledText>
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <StyledText className="text-black font-semibold text-center text-lg">LUNCH</StyledText>
            </StyledView>
            <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
              <StyledText className="text-black font-semibold text-center text-lg">DINNER</StyledText>
            </StyledView>
          </StyledView>
  
          {/* Rows of Buttons */}
          {mealData.map((data, day) => (
            <StyledView className="flex-row justify-center items-center" key={day}>
              <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <StyledText className="text-black font-semibold text-center text-lg">
                  Day {day + 1}
                </StyledText>
              </StyledView>
              <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <Pressable 
                 onPress={() => navigateToMealInfo(data[0].meal)} style="bg-red-400">
                  <Text
                  style=""
                  >
                  {data != null ? String(data[0].meal.name) : null}
                  </Text>
              
                 </Pressable>
              </StyledView>
              <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <Pressable 
                  onPress={() => navigateToMealInfo(data[1].meal)} style="bg-red-400">
                    <Text>
                    {data != null ? String(data[1].meal.name) : null}
                    </Text>
                
                  </Pressable>
              </StyledView>
              <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <Pressable 
                    onPress={() => navigateToMealInfo(data[2].meal)} style="bg-red-400">
                      <Text>
                      {data != null ? String(data[2].meal.name) : null}
                      </Text>
                  
                    </Pressable>
              </StyledView>
            </StyledView>
          ))}
        </StyledView>
      </StyledView>
    );

  }

};

export default Calendar;
