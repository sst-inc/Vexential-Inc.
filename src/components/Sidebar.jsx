import React, {useState}from 'react';
import { View, Button, Pressable, Text, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const getData = async() => {
  const response = fetch("http://192.168.155.82:5000/food/?food=1",
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
  }})
  response.then(async(data) => {
    let json_data = await data.json()
    console.log(json_data)
  })
}

const Sidebar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    
    <View className="w-[200] h-full bg-blue-100 py-10 flex flex-col items-center">

      <Pressable
        onPress = {() => {
          navigation.navigate('MealPlan');
          getData()
        }}
        className='py-3 flex flex-col my-10 justify-center'
      >
        <Image 
          source={require('../../assets/mealplan_icon.png')} 
          className="w-[7vw] h-[7vh]"
          tintColor={route.name == 'MealPlan' ? '#3C92C1': '#697D8C'}
          resizeMode="contain"
        />
        <Text
          className='pt-2 font-semibold text-lg text-center'
        >
          Meal Plan
        </Text>
      </Pressable>

      <View
        className='py-8'
      >
        <Pressable
          onPress = {() => {
            navigation.navigate('Calendar')
          }}
          className='flex flex-row justify-center'
        >
          <View
            className='flex flex-col'
          >
            <Image 
              source={require('../../assets/calendar_icon.png')} 
              className="w-[6vw] h-[6vh]"
              tintColor={route.name == 'Calendar' ? '#3C92C1': '#697D8C'}
              resizeMode="contain"
            />
            <Text
              className='mt-2 font-semibold text-lg text-center'
            >
              Calendar
            </Text>
          </View>
        </Pressable>
      </View>

      <View
        className='py-8'
      >
        <Pressable
          onPress = {() => {
            navigation.navigate('Profile')
          }}
          className='flex flex-row justify-center'
        >
          <View
            className='flex flex-col'
          >
            <Image 
              source={require('../../assets/profile_icon.png')} 
              className="w-[7vw] h-[7vh]"
              tintColor={route.name == 'Profile' ? '#3C92C1': '#697D8C'}
              resizeMode="contain"
            />
            <Text
              className='mt-2 font-semibold text-lg text-center'
            >
              Profile
            </Text>
          </View>
        </Pressable>
      </View>

      <View
        className='py-8'
      >
        <Pressable
          onPress = {() => {
            navigation.navigate('NutritionGuide')
          }}
          className='flex flex-row justify-center'
        >
          <View
            className='flex flex-col'
          >
            <Image 
              source={require('../../assets/nutritionguide_icon.png')} 
              className="w-[7vw] h-[7vh] self-center"
              tintColor={route.name == 'NutritionGuide' ? '#3C92C1': '#697D8C'}
              resizeMode="contain"
            />
            <Text
              className='mt-2 font-semibold text-lg text-center'
            >
              Nutrition Guide
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Sidebar;
