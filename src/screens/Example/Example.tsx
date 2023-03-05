import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../hooks';

const ScreenLogin = () => {
  const { Layout, Gutters, Fonts } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("esto se logeo")
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
          onPress={handleLogin}
        >
          <Text style={[{ color: '#FFFFFF' }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenLogin;
