import { View, Text, StyleSheet } from 'react-native';
import React, { Children } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const Card = ({ children }: any) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#2e2d2c',
    padding: 5,
    marginBottom: hp(2),
  },
});
