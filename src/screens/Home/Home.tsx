import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { logoutSuccess } from '../../store/auth/auth'
import { useTheme } from '../../hooks';
import { RootStackParamList } from '../../screens/Home/interface'
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
const Home = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { Layout, Gutters } = useTheme();

  const handleSubmit = () => {
    dispatch(logoutSuccess());
    navigation.navigate('Login')

  };

  return (
    <SafeAreaView style={[Layout.fill, Gutters.largeTMargin]}>
     <View>
        <Text>ESTO ES HOME</Text>
        <TouchableOpacity
          style={[
            Layout.colCenter,
            Layout.width250,
            Layout.height50,
            Gutters.regularTMargin,
            {
              backgroundColor: '#007AFF',
              borderRadius: 5,
            },
          ]}
          onPress={handleSubmit}
        >
        <Button
          title="Open drawer"
          onPress={() => navigation.navigate('MenuSlide')}
        />
          <Text style={[{ color: '#FFFFFF' }]}>Loguout</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

export default Home;
