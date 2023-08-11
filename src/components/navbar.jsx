import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';

const StyledView = styled(View);

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <StyledView>
      <Button
        title="Meal Plan"
        onPress={() => navigation.navigate('MealPlan')}
      />
      <Button
        title="Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Nutrition Guide"
        onPress={() => navigation.navigate('NutritionGuide')}
      />
    </StyledView>
  );
};

export default Navbar;
