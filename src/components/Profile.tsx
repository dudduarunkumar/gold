import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {globalColors} from '../utiles/GlobalColors';
import {globalFonts} from '../utiles/GlobalFonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#222323',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.headerText}>No Data</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerText: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(2),
    textAlign: 'center',
  },
});
