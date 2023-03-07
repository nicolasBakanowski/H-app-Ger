import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
    const ProfileScreen = () => {
        const user = useSelector((state: RootState) => state.auth.user);
      
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: 'https://picsum.photos/200' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{user}</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
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
