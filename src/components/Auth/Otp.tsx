import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalColors} from '../../utiles/GlobalColors';
import {globalFonts} from '../../utiles/GlobalFonts';
import GlobalButton from '../../global Componets/GlobalButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Otp = ({navigation}) => {
  const [pin, setPin] = useState(new Array(4).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(null);

  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
          <Text style={styles.text}>Let us verify your account</Text>
          <Text style={styles.smText}>
            Please enter the verification code sent to your mail{' '}
            <Text style={{color: globalColors.primary, fontWeight: '700'}}>
              user@gmail.com
            </Text>
          </Text>
          <View style={styles.inputContainer}>
            {pin.map((item, index) => (
              <TextInput
                key={index}
                placeholderTextColor="red"
                style={[
                  styles.pinInput,
                  focusedIndex === index && styles.focusedPinInput,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text => handleChange(text, index)}
                value={pin[index]}
                ref={ref => {
                  inputRefs.current[index] = ref;
                }}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace' && index > 0) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </View>
          <View style={{marginVertical: hp(2)}}>
            <GlobalButton
              title="Continue"
              onPress={() => navigation.navigate('AdditionalDetails')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={styles.smText}>Did not receive the code?</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: wp(1),
              }}>
              <Text style={{fontWeight: '700', color: globalColors.primary}}>
                Resend code
              </Text>
              <MaterialCommunityIcons
                name="reload"
                size={15}
                color={globalColors.primary}
                style={{marginLeft: wp(1)}}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Otp;

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
    marginVertical: hp(1),
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(1),
  },
  pinInput: {
    marginRight: wp(4),
    textAlign: 'center',
    width: wp(18),
    height: hp(9),
    borderRadius: 15,
    backgroundColor: '#2E2D2C',
    color: globalColors.primary,
    fontSize: hp(2.8),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  focusedPinInput: {
    borderColor: globalColors.primary,
    borderWidth: 2,
  },
});
