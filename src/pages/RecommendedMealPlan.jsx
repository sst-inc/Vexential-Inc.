import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';
import { foodChosenForBreakfast, foodChosenForLunch, foodChosenForDinner } from '../../App'

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const RecommendedMealPlan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { dayNumber } = route.params;

  // Define the meal data for each day
  const mealData = {
    1: {
      breakfast: {
        name: foodChosenForBreakfast.name,
        image_uri:
        foodChosenForBreakfast.image_uri,
      },
      lunch: {
        name: foodChosenForLunch.name,
        image_uri: foodChosenForLunch.image_uri,
      },
      dinner: {
        name: foodChosenForDinner.name,
        image_uri: foodChosenForDinner.image_uri,
      },
    },
    2: {
      breakfast: {
        name: 'Greek Yogurt with Mixed Berries and Chopped Almonds',
        image_uri:
          'https://www.almonds.com/sites/default/files/2020-07/abc_BreakfastPairing_A_re01.jpg',
      },
      lunch: {
        name: 'Lentil and Bell Pepper Stir-Fry with Tofu',
        image_uri: 'https://example.com/lentil-stir-fry.jpg',
      },
      dinner: {
        name: 'Bok Choy and Tofu Stir-Fry with Brown Rice',
        image_uri: 'https://example.com/bok-choy-stir-fry.jpg',
      },
    },
    3: {
      breakfast: {
        name: 'Oatmeal Pancakes with Blueberries',
        image_uri:
          'https://s23209.pcdn.co/wp-content/uploads/2012/10/IMG_6988-360x360.jpg',
      },
      lunch: {
        name: 'Chicken and Asparagus Salad with Black Beans',
        image_uri: 'https://example.com/chicken-salad.jpg',
      },
      dinner: {
        name: 'Bell Pepper Stuffed with Lentils and Grilled Chicken',
        image_uri: 'https://example.com/stuffed-pepper.jpg',
      },
    },
    // Add more days ltr u stupid idiot adrill

    4: {
      breakfast:{
        name: 'Whole wheat toast with poached/scrambled/fried eggs',
        image_uri: 'https://images.squarespace-cdn.com/content/v1/55f9c9abe4b09e993da5f156/1539174364166-TIQK5VFA6ANJ2G8X028L/image-asset.png?format=2500w'
      },

      lunch: {
        name: 'Black bean and mushroom soup with a side of mixed greens', 
        image_uri: 'https://addapinch.com/wp-content/uploads/2017/10/mushroom-black-bean-soup-recipe-0020.jpg',
      },

      dinner: {
        name: 'Lentil and turkey stir-fry with quinoa', 
        image_uri: 'https://i0.wp.com/sepcooks.com/wp-content/uploads/2021/07/3DD96B95-F1C8-40D2-99F9-74B73EF16957_1_201_a.jpeg?zoom=2&resize=665%2C435&ssl=1',
      }
    },

    5: {
      breakfast:{
        name: 'Quinoa porridge with mixed fruits', 
        image_uri:'https://www.simplyquinoa.com/wp-content/uploads/2020/01/ultimate-superfood-quinoa-porridge-7.webp'
      },

      dinner: {
        
      }
    }
  };
  

  const selectedMeals = mealData[dayNumber];

  return (
    <StyledView className="flex-1 flex-col bg-blue-100 p-0">
      {/* Back Button */}
      <StyledPressable
        className="w-[142px] h-[50px] rounded-md bg-[#F5FAFE] border border-[#00A3FF] absolute top-5 left-5 flex justify-center items-center"
        onPress={() => navigation.goBack()}
      >
        <StyledText className="text-black text-base font-semibold">
          &lt; back
        </StyledText>
      </StyledPressable>

      {/* Day Text */}
      <StyledView className="flex-row justify-center items-center p-3">
        <StyledText className="text-black text-5xl font-semibold">
          Day {dayNumber}
        </StyledText>
      </StyledView>

      {/* Title */}
      <StyledView className="flex-row justify-center items-center p-1">
        <StyledText className="text-black text-4xl font-semibold">
          Recommended Meal Plan
        </StyledText>
      </StyledView>

      {/* White Box */}
      <StyledView className="w-[1088px] h-[590px] bg-white m-3 mx-auto rounded-xl flex-col justify-start">
        {/* Three Round Edge Boxes */}
        <StyledView className="flex-row justify-between items-start p-3 pl-10 pr-10">
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              BREAKFAST
            </StyledText>
          </StyledView>
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              LUNCH
            </StyledText>
          </StyledView>
          <StyledView className="w-[292px] h-[67px] rounded-full bg-[#48A3E4] flex justify-center items-center">
            <StyledText className="text-white text-3xl font-semibold">
              DINNER
            </StyledText>
          </StyledView>
        </StyledView>

        {/* Mealtime Boxes */}
        <StyledView className="flex-row justify-between items-start p-3 pl-10 pr-10">
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Breakfast */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {selectedMeals.breakfast
                ? selectedMeals.breakfast.name
                : 'No breakfast'}
            </StyledText>
            {selectedMeals.breakfast && (
              <Image
                source={{ uri: selectedMeals.breakfast.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Lunch */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {selectedMeals.lunch ? selectedMeals.lunch.name : 'No lunch'}
            </StyledText>
            {selectedMeals.lunch && (
              <Image
                source={{ uri: selectedMeals.lunch.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
          <StyledView className="w-[292px] h-[394px] rounded-lg bg-[#C4E5F8] border border-gray-300">
            {/* Content for Dinner */}
            <StyledText className="text-black text-xl font-semibold p-4">
              {selectedMeals.dinner ? selectedMeals.dinner.name : 'No dinner'}
            </StyledText>
            {selectedMeals.dinner && (
              <Image
                source={{ uri: selectedMeals.dinner.image_uri }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
            )}
          </StyledView>
        </StyledView>
        {/* Rounded Box at the Bottom */}
        <StyledView className="w-[340px] h-[52px] rounded-full bg-[#146B9C] m-3 mx-auto flex justify-center items-center">
          <StyledText className="text-white text-2xl font-semibold">
            Are my meals balanced?
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default RecommendedMealPlan;
