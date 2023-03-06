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
        options={{ title: 'Configuración' }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Configuración' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
