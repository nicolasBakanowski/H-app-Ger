import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { Props } from './interface';

const ProductCard: React.FC<Props> = ({ product, onAddToCart, onSeeDetails }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleSeeDetails = () => {
    onSeeDetails(product);
  };

  return (
    <TouchableOpacity onPress={handleSeeDetails}>
      <Card style={styles.card}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <TouchableOpacity onPress={handleAddToCart}>
            <Text style={styles.addToCart}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 5,
  },
  image: {
    width: '40%',
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  addToCart: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default ProductCard;
