import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import globalStyles from "../styles/globalStyles";

const startDate = new Date(2023, 6, 16); // Month is 0-indexed
  const dates = [...Array(7)].map((_, i) => {
    let date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });
const MealPlan = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.sidebar}></View>
      <View style={globalStyles.main}>
        <Text style={globalStyles.title}>Meal Plan</Text>
        {dates.map((date, i) => (
          <View 
            key={i} 
            style={[
              globalStyles.date_box, 
              {backgroundColor: i === 0 ? '#A8A8A8' : '#92C6E3'}
            ]}
          >
            <View style={globalStyles.inner_view}>
              <Text style={globalStyles.day}>Day {i+1}</Text>
            </View>
            <Text style={globalStyles.date}>{`${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}`}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



export default MealPlan