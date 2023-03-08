import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../screens/Home/Settings';
import Profile from '../../screens/Home/Profile';
import Home from '../../screens/Home/Home'

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
