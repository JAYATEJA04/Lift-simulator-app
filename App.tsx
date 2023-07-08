import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './src/Components/InitialScreen';
import SimulationScreen from './src/Screens/SimulationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InputScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="InputScreen" component={InitialScreen} />
        <Stack.Screen name="SimulationScreen" component={SimulationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
