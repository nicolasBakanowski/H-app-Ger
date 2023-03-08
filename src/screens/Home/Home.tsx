import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Button, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../hooks';
import { RootStackParamList } from '../../screens/Home/interface'
import { StackNavigationProp } from '@react-navigation/stack';
import  HomeTabs from '../../components/Tabs/HomeTabs'
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
const Home = ({ navigation }: Props) => {
  const { Layout, Gutters } = useTheme();
  return (
     <HomeTabs />
  );
};

export default Home;
