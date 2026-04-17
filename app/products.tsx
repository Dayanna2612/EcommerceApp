import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { getProducts } from '../services/products';
import { clearSession } from '../services/auth';

export const localCart: any[] = [];

type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      const data = Array.isArray(response) ? response : response?.data || [];
      setProducts(data);
    } catch (error: any) {
      Alert.alert('Error', error?.message || 'No fue posible cargar productos');
    }
  };

  useEffect(() => {
    loadProducts();
    setCartCount(localCart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  const addToCart = (product: Product) => {
    const existing = localCart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      localCart.push({ ...product, quantity: 1 });
    }

    const totalItems = localCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);

    Alert.alert('Agregado', `${product.name} fue agregado al carrito`);
  };

  // 🗑 eliminar
  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleLogout = async () => {
    await clearSession();
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>🛍 Catálogo</Text>

        <View style={styles.topButtons}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/cart')}
          >
            <Text style={styles.menuButtonText}>Carrito ({cartCount})</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.menuButtonText}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => router.push('/product-form')}
          >
            <Text style={styles.menuButtonText}>Crear producto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuButton, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Text style={styles.menuButtonText}>Salir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productsContainer}>
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              {product.imageUrl ? (
                <Image
                  source={{ uri: product.imageUrl }}
                  style={styles.productImage}
                />
              ) : (
                <View style={styles.imagePlaceholder} />
              )}

              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>
                {product.description || 'Sin descripción'}
              </Text>
              <Text style={styles.productPrice}>${product.price}</Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(product)}
              >
                <Text style={styles.addButtonText}>Agregar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(product.id)}
              >
                <Text style={styles.deleteButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  scrollContent: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff4da6',
    marginBottom: 20,
  },
  topButtons: {
    gap: 14,
    marginBottom: 24,
  },
  menuButton: {
    backgroundColor: '#ff4da6',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff1a1a',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productsContainer: {
    gap: 20,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  productImage: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    marginBottom: 14,
    resizeMode: 'cover',
  },
  imagePlaceholder: {
    height: 180,
    backgroundColor: '#2a2a2a',
    borderRadius: 14,
    marginBottom: 14,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 16,
    color: '#a1a1aa',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4da6',
    marginBottom: 14,
  },
  addButton: {
    backgroundColor: '#ff4da6',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#ff1a1a',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});