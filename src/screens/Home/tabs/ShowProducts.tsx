import React from 'react';
import { StyleSheet, ScrollView, ViewStyle,View } from 'react-native';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { ProductInteface } from 'HappGer/src/components/ProductCard/interface';
interface HomeScreenProps {}

const products: ProductInteface[] = [
  {
    id: 1,
    title: 'Producto 1',
    price: 19.99,
    image: 'https://source.unsplash.com/random/300x300',
    description: 'Descripción del producto 1',
  },
  {
    id: 2,
    title: 'Producto 2',
    price: 29.99,
    image: 'https://source.unsplash.com/random/301x301',
    description: 'Descripción del producto 2',
  },
  {
    id: 3,
    title: 'Producto 3',
    price: 39.99,
    image: 'https://source.unsplash.com/random/302x302',
    description: 'Descripción del producto 3',
  },
];

const ShowProducts: React.FC<HomeScreenProps> = () => {
  const containerStyle: ViewStyle = {
    flexGrow: 1,
    padding: 10,
  };

  return (
    <View style={{ backgroundColor: '#fff', shadowColor: '#000', shadowRadius: 5, elevation: 5 }}>
      <ScrollView contentContainerStyle={{  flexGrow: 1,padding: 10}}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product: ProductInteface) => console.log('Agregando al carrito', product)}
            onSeeDetails={(product: ProductInteface) => console.log('Viendo detalles de', product)}
          />
        ))}
      </ScrollView>
    </View>    
  );
};

const styles = StyleSheet.create({});

export default ShowProducts;
