import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InitialScreen = ({navigation}: any) => {
  // const navigation = useNavigation();
  const [lifts, setLifts] = useState();
  const [floors, setFloors] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Lift Simulator</Text>
      <TextInput
        style={styles.LiftandFloorsInput}
        value={lifts}
        onChangeText={() => setLifts}
        placeholder="Enter no. of lifts"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.LiftandFloorsInput}
        value={floors}
        onChangeText={() => setFloors}
        placeholder="Enter no. of floors"
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.CreateSimulationButton}
        onPress={() => navigation.navigate('SimulationScreen')}>
        <Text style={styles.CreateButtonText}>Create Simulation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 40,
    alignSelf: 'center',
    backgroundColor: '#F4CE6A',
  },

  titleText: {
    fontSize: 40,
    color: '#120E43',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  LiftandFloorsInput: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'black',
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#CAD5E2',
    textAlign: 'center',
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
    color: '#120E43',
  },
});

export default InitialScreen;
