import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#E1EDF9',
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },

  sidebar: {
    width: '13.75%',
    height: '100%',
    backgroundColor: '#F5FAFE',
  },

  main: {
    flex: 1, 
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: '#E1EDF9',
    alignItems: 'center',
    padding: '0%', 
  },

  title: {
    color: 'black',
    fontSize: windowWidth * 0.05, 
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginTop: '3%',
  },

  date_box: {
    flexDirection: 'column', 
    width: '70%', 
    height: '8%', 
    borderRadius: 50,
    alignItems: 'center', 
    justifyContent: 'space-around',
    marginTop: '3.1%',  
  },

  inner_view: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },

  day: {
    color: '#DFEFFF',
    fontSize: windowWidth * 0.025, 
    fontFamily: 'Roboto',
    fontWeight: '400',
    alignItems: 'center',
  },

  date: {
    color: '#DFEFFF',
    fontSize: windowWidth * 0.04, 
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
});



export default globalStyles