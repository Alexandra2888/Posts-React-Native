import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from "./CustumTabBar.styles";

 const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBarBase}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
            key={route.key} 
              onPress={onPress}
              style={
                isFocused === true ? styles.focusedBg : styles.nonFocusedBg
              }>
              <Text
                style={
                  isFocused === true ? styles.focusedTxt : styles.nonFocusedTxt
                }>
                {route.name === 'MainTab' ? 'Posts' : ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};



export default CustomTabBar;