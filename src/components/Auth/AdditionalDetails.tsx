//@ts-nocheck
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalColors} from '../../utiles/GlobalColors';
import {globalFonts} from '../../utiles/GlobalFonts';

import TextInputWithIcon from '../../global Componets/TextInputWithIcon';
import GlobalButton from '../../global Componets/GlobalButton';

const AdditionalDetails = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.mainConatiner}>
        <View style={styles.mainConatineroutside}>
          <Text style={styles.headerText}>Additional Details</Text>
          <Text style={[styles.smText, {marginTop: hp(3)}]}>Name</Text>
          <TextInputWithIcon
            iconName="account-circle"
            placeholder="Name"
            placeholderTextColor="grey"
            // onChangeText={handleTextChange}
          />
          <Text style={[styles.smText, {marginTop: hp(3)}]}>Email Address</Text>
          <TextInputWithIcon
            iconName="gmail"
            placeholder="Username@gmail.com"
            placeholderTextColor="grey"

            // onChangeText={handleTextChange}
          />
        </View>

        <View style={styles.mainConatinerinside}>
          <GlobalButton
            title="Continue"
            onPress={() => navigation.navigate('TabNav')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AdditionalDetails;


const styles = StyleSheet.create({
  mainConatiner: {
    height: hp(100),
    width: wp(100),
    // flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#222323',
    paddingHorizontal: wp(4),
    marginTop: hp(10),
    // paddingVertical: hp(8),

  },
  mainConatineroutside: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: '#222323',
  },
  mainConatinerinside: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: hp(20),
    // backgroundColor: '#222323',
  },
  text: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(3),
  },
  headerText: {
    color: globalColors.primary,
    fontFamily: globalFonts.bold,
    fontSize: hp(3.5),
  },
  smText: {
    fontSize: hp(1.8),
    fontFamily: globalFonts.reguler,
    color: globalColors.secondary,

    marginVertical: hp(1),
    lineHeight: 22,
  },
});
