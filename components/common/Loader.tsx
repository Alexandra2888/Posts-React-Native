import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';

import {styles} from "./Loader.styles";

const Loader = () => {
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));

  useEffect(() => {
    StartImageRotate();
  }, []);

  function StartImageRotate() {
    rotateValue.setValue(0);

    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => StartImageRotate()),
    ).start();
  }

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          color: 'red',
          textAlign: 'center',
          fontSize: 24,
          transform: [{rotate: RotateData}],
        }}>
        ⏳
      </Animated.Text>
    </View>
  );
};


export default Loader;
