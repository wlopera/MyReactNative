import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const TouchImageScreen = () => {
  const handlePress = () => {
    alert('TouchableOpacity pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          // source={require('../recursos/images/react-native.png')}
          source={require('../recursos/images/card.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TouchImageScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.35, // 80% de ancho
    height: windowHeight * 0.2, // 6% de alto
    borderWidth: 2,
    borderColor: 'red',
  },
});
