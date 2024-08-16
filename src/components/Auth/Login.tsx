import {
  View,
  Text,
  StyleSheet,
  Image,
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

const Login = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.mainConatiner}>
        <View style={{marginTop: hp(10)}}>
          <Image
            resizeMode="contain"
            style={{height: hp(10)}}
            source={require('../../assets/images/loginImage.png')}
          />
          <Text style={styles.headerText}>Sign Up</Text>
          <Text style={styles.text}>Please sign up to continue.</Text>
          <View style={{marginTop: hp(3)}}>
            <TextInputWithIcon
              iconName="phone"
              keyboardType="number-pad"
              placeholder="Enter your phone number"
              placeholderTextColor="grey"
              // onChangeText={handleTextChange}
            />
          </View>

          <Text style={styles.smText}>
            Sign up with{' '}
            <Text style={{color: globalColors.primary, fontWeight: '700'}}>
              Email
            </Text>{' '}
            instead
          </Text>
        </View>
        <View style={{marginBottom: hp(4)}}>
          <Text style={styles.smText}>
            By signing up, you’re agreeing to our
            <Text style={{color: globalColors.primary, fontWeight: '700'}}>
              {' '}
              Terms & Conditions{' '}
            </Text>
            and
            <Text style={{color: globalColors.primary, fontWeight: '700'}}>
              {' '}
              Privacy Policy
            </Text>
          </Text>

          <View style={{marginVertical: hp(1)}}>
            <GlobalButton
              title="Continue"
              onPress={() => navigation.navigate('Otp')}
            />
          </View>
          <Text style={styles.smText}>
            Joined us before?
            <Text style={{color: globalColors.primary, fontWeight: '700'}}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainConatiner: {
    height: hp(100),
    width: wp(100),
    backgroundColor: '#222323',
    paddingHorizontal: wp(4),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(2.5),
  },
  headerText: {
    color: globalColors.primary,
    fontFamily: globalFonts.bold,
    fontSize: hp(5),
  },
  smText: {
    fontSize: hp(1.5),
    fontFamily: globalFonts.reguler,
    color: globalColors.secondary,
    textAlign: 'center',
    marginVertical: hp(1),
    lineHeight: 22,
  },
});
