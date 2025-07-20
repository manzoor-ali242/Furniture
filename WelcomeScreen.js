import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww',
      }}
      style={styles.background}
    >
        <View style={styles.topContainer}>
  <Text style={styles.furnitureText}>Furniture</Text>
  <Text>
    <Text style={styles.shoppingText}>Shopping</Text>
    <Text style={styles.madeEasyText}> Made Easy</Text>
  </Text>
</View>



      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Text style={styles.arrow}>➔</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  topContainer: {
  position: 'absolute',
  top: 50,
  left: 20,
},

furnitureText: {
  fontSize: 44,
  fontWeight: 'bold',
  color: '#fff',
},

shoppingText: {
  fontSize: 60,
  fontWeight: 'bold',
  color: 'yellow',
},

madeEasyText: {
  fontSize: 35,
  color: '#fff',
},

  bottomContainer: {
    padding: 8,
    backgroundColor: 'rgba(10, 6, 6, 0.4)',
    margin: 20,
    borderRadius: 40,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3E3E3E',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 220,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    marginLeft: 10,
    fontSize: 14,
    overflow: 'hidden',
  },
});
