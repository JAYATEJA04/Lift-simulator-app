import React from 'react';
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../Components/InitialScreen';
import SimulationScreen from './SimulationScreen';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputScreen">
        <Stack.Screen name="InputScreen" component={InitialScreen} />
        <Stack.Screen name="SimulationScreen" component={SimulationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;
