import 'react-native-gesture-handler';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

type data = {id: number; title: string};
let DummyD: data[];
DummyD = [];

//type Itemprops = {item: data; index: number; seperator: object};

/*const ListItem = ({item, index, seperator}: Itemprops) => (
  <TouchableHighlight
    style={styles.listItem}
    key={item.id}
    onShowUnderlay={seperator.highlight}
    onHideUnderlay={seperator.unhighlight}>
    <Text style={styles.listItText}>{item.title}</Text>
  </TouchableHighlight>
);*/

function buttonPress() {
  Alert.alert('A Button was pressed');
}
function Devices(): JSX.Element {
  for (let i = 0; i < 30; i++) {
    DummyD.push({id: i, title: 'Hello again it is me my friend'});
  }
  return (
    <View style={styles.containercol}>
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[styles.sepStyle, highlighted && {marginLeft: 0}]} />
        )}
        data={DummyD}
        renderItem={({item, index, separators}) => (
          <TouchableHighlight
            key={item.id}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={styles.listItem}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
        contentContainerStyle={styles.flatList}
      />
      <TouchableHighlight
        onPress={buttonPress}
        style={styles.touchablesimp}
        underlayColor="#FF1694">
        <View style={styles.button}>
          <Text>Dette bør ikke virke</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default Devices;

const styles = StyleSheet.create({
  containercol: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchablesimp: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    margin: 5,
    flex: 0.5,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  listItem: {
    textAlign: 'center',
    backgroundColor: '#74f74f',
  },
  listItText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
  },
  flatList: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
    alignContent: 'center',
  },
  sepStyle: {
    color: '#000000',
    height: '20%',
    width: '10%',
  },
});
