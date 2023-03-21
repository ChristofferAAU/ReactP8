import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Devices(): JSX.Element {
  return (
    <View>
      <Text>Devices Screen</Text>
    </View>
  );
}

export default Devices;

const styles = StyleSheet.create({
  containerrow: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  containercol: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  touchablesimp: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
