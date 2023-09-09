import React from 'react';
import { Text, View, Image } from 'react-native';
import { styled } from 'nativewind';


const StyledView = styled(View);
const StyledText = styled(Text);


const MealInfo = ({ route }) => {
const { foodItem } = route.params;


return (
<StyledView className="flex-1 flex-row bg-blue-100 p-0">
{/* Left side: Meal Image */}
<Image
source={{ uri: foodItem.image_uri }}
style={{ flex: 1, height: '100%' }}
resizeMode="cover"
/>


{/* Right side: Food Name and Healthiness Level */}
<StyledView className="flex-1 bg-white p-3">
{/* Food Name */}
<StyledView className="mb-2">
<StyledText className="text-black text-6xl font-semibold">
{foodItem.name}
</StyledText>
</StyledView>


{/* Healthy Level */}
<StyledView className="flex-row mb-1">
<StyledText className="text-green-500 text-4xl font-semibold">
Healthy Level:&nbsp;
</StyledText>
<StyledText className="text-green-500 text-4xl font-semibold">
{Array.from({ length: foodItem.stars }, (_, index) => (
<Text key={index}>★</Text>
))}
</StyledText>
</StyledView>
</StyledView>
</StyledView>
);
};


export default MealInfo;
