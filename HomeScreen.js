import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const categoryData = {
    Chair: {
      name: 'Lounge Chair',
      price: '$299.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-yaePtTfsciEyta1-ByRUiWtQCVzNfAlZg&s',
    },
    Sofa: {
      name: 'Modern Sofa',
      price: '$399.99',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww',
    },
    Table: {
      name: 'Wooden Table',
      price: '$149.99',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwLkMOmo1W6SdGEVUoGhrCyXhtbguoHIiSg&s',
    },
    Lamp: {
      name: 'Stylish Lamp',
      price: '$89.99',
      image:
        'data:image/jpeg;base64,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',
    },
    Bed: {
      name: 'King Size Bed',
      price: '$499.99',
      image:
        'data:image/jpeg;base64,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',
    },
  };

  const [selectedCategory, setSelectedCategory] = useState('Chair');

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey Manzoor</Text>
        <View style={styles.iconRow}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Ionicons
            name="search"
            size={24}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Explore Your
          {'\n'}
          <Text style={styles.boldTitle}>Furnitures</Text>
        </Text>
      </View>

      {/* Category Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryRow}
      >
        {Object.keys(categoryData).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === item && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.activeCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Item */}
      <View style={styles.featuredCard}>
        <Image
          source={{ uri: categoryData[selectedCategory].image }}
          style={styles.featuredImage}
        />
        <View style={styles.featuredDetails}>
          <View style={styles.rating}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={22} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.productTitle}>
          {categoryData[selectedCategory].name}
        </Text>
        <Text style={styles.price}>{categoryData[selectedCategory].price}</Text>
      </View>

      {/* Product Grid (Optional — can be dynamic too later) */}
      <View style={styles.grid}>
        {[
          {
            name: 'Ten Chair',
            price: '$190.99',
            image:
              'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg',
          },
          {
            name: 'Cosynest',
            price: '$180.99',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-7JDP-VG9p-9jhfS3JXs7bLZCs0QN_C_Yw&s',
          },
        ].map((item, index) => (
          <View style={styles.gridItem} key={index}>
            <Image source={{ uri: item.image }} style={styles.gridImage} />
            <View style={styles.gridRating}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.gridRatingText}>4.5</Text>
            </View>
            <Text style={styles.gridName}>{item.name}</Text>
            <Text style={styles.gridPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Feather name="home" size={24} color="black" />
        <Feather name="search" size={24} color="#999" />
        <Feather name="shopping-bag" size={24} color="#999" />
        <Feather name="user" size={24} color="#999" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#555',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    color: '#000',
  },
  boldTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "rgba(15, 15, 10, 1)",
  },
  categoryRow: {
    marginTop: 20,
    flexDirection: 'row',
  },
  categoryButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: '#000',
  },
  categoryText: {
    color: '#000',
  },
  activeCategoryText: {
    color: '#fff',
  },
  featuredCard: {
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#444',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  gridRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  gridRatingText: {
    marginLeft: 4,
    fontSize: 13,
  },
  gridName: {
    fontSize: 14,
    marginTop: 6,
    fontWeight: '600',
  },
  gridPrice: {
    fontSize: 13,
    color: '#333',
  },
  bottomBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
