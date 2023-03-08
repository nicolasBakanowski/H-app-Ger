import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstTab = () => {
  return (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
      <Text>Contenido de la Primera Pestaña</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FirstTab;
