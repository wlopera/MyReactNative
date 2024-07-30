import React from 'react';
//import StateScreen from './screens/StateScreen';
//import PropsScreenContainer from './screens/PropsScreen/PropsScreenContainer';
// import FlexBoxScreen from './screens/FlexBoxScreen';
// import ListViewScreen from './screens/ListViewScreen';
// import TextInputScreen from './screens/TextInputScreen';
import TouchImageScreen from './screens/TouchImageScreen';
import ControlTimer from './screens/ControlTimer/ControlTimer';

import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* return <StateScreen />; */}
      {/* <PropsScreenContainer /> */}
      {/* <FlexBoxScreen /> */}
      {/* <ListViewScreen /> */}
      {/* <TouchImageScreen /> */}
      <ControlTimer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
    backgroundColor: '#c7f69e',
  },
});
