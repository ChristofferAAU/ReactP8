import 'react-native-gesture-handler';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Dummy = [{id: '1', title: 'Item one'}];

type Itemprops = {title: string};

const ListItem = ({title}: Itemprops) => (
  <View>
    <Text>{title}</Text>
  </View>
);

function AddTask(): JSX.Element {
  return (
    <View style={styles.containercol}>
      <Text>Add Task Screen</Text>
      <FlatList
        data={Dummy}
        renderItem={({item}) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default AddTask;

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
