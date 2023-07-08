import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const MyLayout = () => {
  const flexD = 'column';
  return (
    <View style={{flex: 1, flexDirection: flexD, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#808080'}}>
        <Text style={styles.label}>'Head'</Text>
      </View>
      <View style={{flex: 6, backgroundColor: '#D3D3D3'}}>
        <Text style={styles.label}>'Body'</Text>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </View>
      <View style={{flex: 1, backgroundColor: '#808080'}}>
        <Text style={styles.label}>'Foot'</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: width * 6,
    height: height / 6,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default MyLayout;
