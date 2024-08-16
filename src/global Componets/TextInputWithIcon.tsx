import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalColors} from '../utiles/GlobalColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextInputWithIcon = ({iconName, ...textInputProps}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        size={25}
        color={globalColors.primary}
      />
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: globalColors.primary,
    paddingHorizontal: wp(4),
    borderRadius: 15,
    height: hp(7),
    backgroundColor: '#2E2D2C',
    // padding: 10,
  },
  input: {
    flex: 1,
    marginLeft:wp(2),
    fontSize: hp(2.5),
    color: globalColors.secondary,

    // fontSize: 16,
  },
});

export default TextInputWithIcon;
