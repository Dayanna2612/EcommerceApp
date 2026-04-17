import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Product } from '../services/products';

interface Props {
  product: Product;
  onAdd: () => void;
  onDelete: () => void; // 👈 NUEVO
}

export default function ProductCard({ product, onAdd, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: product.imageUrl || 'https://via.placeholder.com/300x200.png?text=Ecommerce',
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>
        {product.description || 'Producto disponible en tienda'}
      </Text>
      <Text style={styles.price}>${product.price}</Text>

      <Pressable style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Agregar</Text>
      </Pressable>

      {/* 🗑 BOTÓN ELIMINAR */}
      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  description: {
    color: '#a1a1aa',
    marginBottom: 8,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ff4da6',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ff4da6',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  deleteButton: {
    backgroundColor: '#ff1a1a',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});