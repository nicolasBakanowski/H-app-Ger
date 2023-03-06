import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { loginSuccess, loginFailed } from '../../store/auth/auth'

import { useTheme } from '../../hooks';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../screens/Home/interface'

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};
const Login = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { Layout, Gutters } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log("adsadas")
    // Aquí iría la lógica para hacer la petición al servidor y verificar las credenciales del usuario
    // En este ejemplo, simularemos que el inicio de sesión es exitoso si el usuario es "admin" y la contraseña es "password"
    if (username === 'Admin' && password === 'password') {
      dispatch(loginSuccess({ username }));
      navigation.navigate('Home')
    } else {
      dispatch(loginFailed('Invalid username or password'));
    }
  };

  return (
    <SafeAreaView style={[Layout.fill, Gutters.largeTMargin]}>
      <View style={[Layout.fill, Layout.colCenter]}>
        <Text style={[Gutters.largeBMargin]}>Login</Text>
        <View style={[Layout.colCenter, Gutters.regularBMargin]}>
          <TextInput
            style={[
              Layout.width250,
              Gutters.regularBMargin,
              { borderBottomWidth: 1 },
            ]}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={[
              Layout.width250,
              { borderBottomWidth: 1 },
            ]}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
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
          <Text style={[{ color: '#FFFFFF' }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
