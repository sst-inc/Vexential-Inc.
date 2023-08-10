

import React from 'react';
import { View, Text, Button } from 'react-native';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);

const PageWithNavbar = ({ children }) => {
  const navigation = useNavigation();

  return (
    <StyledView style={{ flexDirection: 'row' }}>
      {/* Sidebar */}
      <StyledView style={{ width: 44, height: '100%', backgroundColor: 'blue' }}>
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

      {/* Main Content */}
      <StyledView style={{ flex: 1, backgroundColor: 'lightblue', padding: 0 }}>
        {children}
      </StyledView>
    </StyledView>
  );
};

export default PageWithNavbar;
