import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';


const Splash = ({navigation}) => {
  

  useEffect(() => {
    const timeout = setTimeout(() => {
     navigation.replace('Onboard');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.circle}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    resizeMode: 'contain',
  },
});
