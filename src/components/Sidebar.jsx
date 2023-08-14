import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ width: 200, backgroundColor: 'lightblue' }}>
      <Button title="Meal Plan" onPress={() => navigation.navigate('MealPlan')} />
      <Button title="Calendar" onPress={() => navigation.navigate('Calendar')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Nutrition Guide" onPress={() => navigation.navigate('NutritionGuide')} />
    </View>
  );
};

export default Sidebar;
