import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import Sidebar from '../components/Sidebar';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const StyledView = styled(View);
const StyledText = styled(Text);

const Calendar = ({ item, route }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { dayNumber, selectedDiseases } = route.params;
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateToMealInfo = (meal) => {
    navigation.navigate('MealInfo', {
      foodItem: meal // Pass foodItem instead of meal
    });
  };

  useEffect(() => {
    const getData = async (i) => {
      let data = await AsyncStorage.getItem(String(i));
      let food = await JSON.parse(data);
      return food;
    };
    const getFood = async () => {
      let currentMealArray = [];
      for (let i = 1; i < 8; i++) {
        let foodResult = await getData(i);
        currentMealArray.push(foodResult);
      }
      setMealData(currentMealArray);
      setLoading(false);
    };
    getFood();
  }, []);

  if (loading) {
    return (
      <StyledView>
        <StyledText>{t('loading')}</StyledText>
      </StyledView>
    );
  } else {
    return (
      <StyledView className="flex-1 flex-row">
        <StyledView className="w-44 h-full bg-blue-200">
          <Sidebar />
        </StyledView>
  
        <StyledView className="flex-1 flex-col bg-blue-100 p-0 overflow-scroll">
          <StyledView className="flex-row justify-center items-center p-4">
            <StyledText className="text-black text-xl font-semibold">
              {t('calendar_title')}
            </StyledText>
          </StyledView>
  
          <StyledView className="flex-row justify-center items-center">
            <StyledView className="w-60 h-[60px]"></StyledView>
            {['breakfast', 'lunch', 'dinner'].map((meal, index) => (
              <StyledView key={index} className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <StyledText className="text-black font-semibold text-center text-lg">
                  {t(meal)}
                </StyledText>
              </StyledView>
            ))}
          </StyledView>
  
          {mealData.map((data, day) => (
            <StyledView className="flex-row justify-center items-center" key={day}>
              <StyledView className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                <StyledText className="text-black font-semibold text-center text-lg">
                  {t('day')} {day + 1}
                </StyledText>
              </StyledView>
              {data.map((mealData, index) => (
                <StyledView key={index} className="w-60 h-[60px] rounded-2xl bg-white m-1 border border-gray-400 flex justify-center items-center">
                  <Pressable onPress={() => navigateToMealInfo(mealData.meal)} style="bg-red-400">
                    <Text>{mealData ? mealData.meal.name : ''}</Text>
                  </Pressable>
                </StyledView>
              ))}
            </StyledView>
          ))}
        </StyledView>
      </StyledView>
    );
  }
};

export default Calendar;
