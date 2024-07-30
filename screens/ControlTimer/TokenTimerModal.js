/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, StyleSheet, Text} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

export default function TokenTimerModal(props) {
  const {totalSteps = 10, startPercentage = 0, onCurrentTimer} = props;
  const strokeWidth = 5;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const {colors = 'tomato'} = props;
  const duration = totalSteps * 1000;

  // Calcular el valor inicial basado en startPercentage
  const initialStepValue = totalSteps - (startPercentage / 100) * totalSteps;

  const animated = useRef(new Animated.Value(initialStepValue));
  const circleRef = useRef(null);
  const intervalRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(initialStepValue);

  const mapValueToPercentage = value => {
    return ((totalSteps - value) * 100) / totalSteps;
  };

  const startAnimation = (toValue, animationDuration) => {
    return Animated.timing(animated.current, {
      toValue,
      duration: animationDuration,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished && toValue === 0) {
        animated.current.setValue(totalSteps);
        setTimeLeft(totalSteps);
        startAnimation(0, duration);
      }
    });
  };

  const resetAnimation = () => {
    animated.current.stopAnimation();
    animated.current.setValue(totalSteps);
    setTimeLeft(totalSteps);
    startAnimation(0, duration);
  };

  useEffect(() => {
    const stepDuration = duration / totalSteps;
    const calculatedDuration = stepDuration * initialStepValue;

    startAnimation(0, calculatedDuration);

    const listener = animated.current.addListener(v => {
      const maxPerc = mapValueToPercentage(v.value);
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (circleRef.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const newTimeLeft = prev - 1;
        if (newTimeLeft < 1) {
          resetAnimation();
          return totalSteps;
        }
        return newTimeLeft;
      });
    }, duration / totalSteps);

    return () => {
      animated.current.removeListener(listener);
      clearInterval(intervalRef.current);
    };
  }, [duration, startPercentage]);

  useEffect(() => {
    onCurrentTimer(timeLeft);
  }, [timeLeft]);

  return (
    <View>
      <View
        style={{width: radius * 2, height: radius * 2, position: 'relative'}}>
        <Svg
          height={radius * 2}
          width={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
          <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke="#E6E7E8"
              strokeWidth={strokeWidth}
              strokeOpacity=".5"
            />
            <Circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={colors}
              strokeWidth={strokeWidth}
              strokeDashoffset={
                circumference -
                (circumference * mapValueToPercentage(initialStepValue)) / 100
              }
              strokeDasharray={circumference}
              strokeLinecap="round"
            />
          </G>
        </Svg>
      </View>
      <View
        style={{
          ...styles.counterContainer,
          top: radius / 2 + 5,
          left: radius - 28,
        }}>
        <Text style={styles.counterText}>{timeLeft}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    width: 56,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  counterText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
