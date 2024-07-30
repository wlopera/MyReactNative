/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';

import TokenTimerModal from './TokenTimerModal';

export default GenericModalTimer = props => {
  const {
    startPercentage = 0,
    message = null,
    checkList = null,
    onCurrentTimer = null,
  } = props;
  const [percentage, setPercentage] = useState(startPercentage);

  useEffect(() => {
    setPercentage(startPercentage);
  }, [startPercentage]);

  return (
    <View style={[styles.tokenItem, styles.tokenTimer]}>
      <TokenTimerModal
        totalSteps={10}
        colors={'#118544'}
        startPercentage={percentage}
        onCurrentTimer={onCurrentTimer}
        {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'absolute',
            paddingTop: 7,
          }}>
          <View
            style={
              Platform.OS == 'ios' ? {position: 'absolute', top: -18} : null
            }>
            {/* <Text style={styles.counter}>{timer}</Text> */}
          </View>
        </View>
      </TokenTimerModal>

      <View style={styles.message}>
        <Text>{message ? message : 'Espera un Momento'}</Text>
      </View>
      <View>
        {checkList?.map((item, index) => {
          return (
            <View key={index} style={styles.viewImage}>
              <Image
                source={require('../../recursos/images/check-symbol.png')}
                style={styles.checkImage(item.check)}
                resizeMode="contain"
              />
              <View style={styles.viewCheck}>
                <Text>{item.value}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tokenItem: {
    paddingHorizontal: 30,
  },
  tokenTimer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    textAlign: 'center',
    color: 'grey',
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
  },
  message: {
    paddingTop: 30,
    width: 250,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Poppins',
    marginBottom: 40,
  },
  viewImage: {
    flexDirection: 'row',
  },
  viewCheck: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  checkImage: type => ({
    width: 16,
    height: 16,
    tintColor: type ? '#118544' : 'red',
    marginBottom: 10,
  }),
});
