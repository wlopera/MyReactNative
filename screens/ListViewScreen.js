import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const data = [
  {
    id: 0,
    name: 'Carlos',
  },
  {
    id: 1,
    name: 'Daniel',
  },
  {
    id: 2,
    name: 'Andrés',
  },
  {
    id: 3,
    name: 'Camila',
  },
  {
    id: 4,
    name: 'William',
  },
];

const ListViewScreen = () => {
  const [myList, setMyList] = useState({names: data});

  const showItem = item => {
    alert(JSON.stringify(item));
  };

  return (
    <View style={styles.container}>
      {myList.names.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => showItem(item)}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListViewScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  item: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#b1c2f7',
    alignItems: 'center',
  },
  text: {color: '#4f603c', fontSize: 18},
});
