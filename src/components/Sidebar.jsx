import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ dayNumber, selectedDiseases }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { t } = useTranslation();

  return (
    <View className="w-[200] h-full bg-blue-100 py-10 flex flex-col items-center">
      <Pressable
        onPress={() => {
          navigation.navigate('MealPlan');
        }}
        className="py-3 flex flex-col my-10 justify-center">
        <Image
          source={require('../../assets/mealplan_icon.png')}
          className="w-[7vw] h-[7vh]"
          tintColor={route.name === 'MealPlan' ? '#3C92C1' : '#697D8C'}
          resizeMode="contain"
        />
        <Text className="pt-2 font-semibold text-lg text-center">
          {t('sidebar.mealPlan')}
        </Text>
      </Pressable>

      <View className="py-8">
        <Pressable
          onPress={() => {
            navigation.navigate('Calendar', {dayNumber});
          }}
          className="flex flex-row justify-center">
          <View className="flex flex-col">
            <Image
              source={require('../../assets/calendar_icon.png')}
              className="w-[6vw] h-[6vh]"
              tintColor={route.name === 'Calendar' ? '#3C92C1' : '#697D8C'}
              resizeMode="contain"
            />
            <Text className="mt-2 font-semibold text-lg text-center">
              {t('sidebar.calendar')}
            </Text>
          </View>
        </Pressable>
      </View>

      <View className="py-8">
        <Pressable
          onPress={() => {
            navigation.navigate('Profile');
          }}
          className="flex flex-row justify-center">
          <View className="flex flex-col">
            <Image
              source={require('../../assets/profile_icon.png')}
              className="w-[7vw] h-[7vh]"
              tintColor={route.name === 'Profile' ? '#3C92C1' : '#697D8C'}
              resizeMode="contain"
            />
            <Text className="mt-2 font-semibold text-lg text-center">
              {t('sidebar.profile')}
            </Text>
          </View>
        </Pressable>
      </View>

      <View className="py-8">
        <Pressable
          onPress={() => {
            navigation.navigate('NutritionGuide', { selectedDiseases });
          }}
          className="flex flex-row justify-center">
          <View className="flex flex-col">
            <Image
              source={require('../../assets/nutritionguide_icon.png')}
              className="w-[7vw] h-[7vh]"
              tintColor={route.name === 'NutritionGuide' ? '#3C92C1' : '#697D8C'}
              resizeMode="contain"
            />
            <Text className="mt-2 font-semibold text-lg text-center">
              {t('sidebar.nutritionGuide')}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Sidebar;
