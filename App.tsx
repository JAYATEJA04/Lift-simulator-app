/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Lift Simulator</Text>
      <TextInput
        style={styles.LiftandFloorsInput}
        placeholder="Enter no. of lifts"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.LiftandFloorsInput}
        placeholder="Enter no. of floors"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.CreateSimulationButton}>
        <Text style={styles.CreateButtonText}>Create Simulation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    alignSelf: 'center',
  },

  titleText: {
    fontSize: 40,
    color: 'orange',
    fontStyle: 'italic',
  },

  LiftandFloorsInput: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'black',
    margin: 20,
    fontSize: 20,
  },

  CreateSimulationButton: {
    width: '100%',
    height: 50,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },

  CreateButtonText: {
    fontSize: 20,
    color: 'orange',
  },
});

export default App;
