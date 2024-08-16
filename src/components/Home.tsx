import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
     
      <Image
      source={require('../assets/images/home.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222323',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Home;
