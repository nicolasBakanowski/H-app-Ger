import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutSuccess } from '../../store/auth/auth'
import { RootState } from '../../store/index';
import { useTheme } from '../../hooks';
import { RootStackParamList } from '../Home/interface'
import { StackNavigationProp } from '@react-navigation/stack';
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type Props = {
  navigation: LoginScreenNavigationProp;
};
const ProfileScreen = ({ navigation }: Props) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const { Layout, Gutters } = useTheme()
    const handleSubmit = () => {
      dispatch(logoutSuccess());
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    };
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user}</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
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
      <Text style={[{ color: '#FFFFFF' }]}>Loguout</Text>
    </TouchableOpacity>
      </View>
    );
};
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProfileScreen;
