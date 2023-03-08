import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Button, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../hooks';
import { RootStackParamList } from '../../screens/Home/interface'
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
const Home = ({ navigation }: Props) => {
  const { Layout, Gutters } = useTheme();
  return (
    <SafeAreaView style={[Layout.fill, Gutters.largeTMargin]}>
     <View>
        <Text>ESTO ES HOME</Text>
     </View>
    </SafeAreaView>
  );
};

export default Home;
