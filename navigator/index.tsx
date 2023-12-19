import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from '../components/common';
import { StackInTabInMain, StackInPostDetail } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainTab"
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="MainTab"
        component={StackInTabInMain}
        options={{ tabBarLabel: 'POSTS' }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="MainStack"
          component={MainTabNavigator}
        />
        <Stack.Screen
          name="PostDetailStack"
          component={StackInPostDetail}
          options={{ title: 'Post Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
