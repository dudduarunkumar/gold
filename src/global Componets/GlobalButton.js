import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalColors} from '../utiles/GlobalColors';
import {globalFonts} from '../utiles/GlobalFonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GlobalButton = ({
  title,
  onPress,
  style,
  textStyle,
  disable,
  icon,
  iconStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disable}
      {...props}>
      <View style={styles.content}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color="black"
            style={[styles.icon, iconStyle]}
          />
        )}
        <Text style={[textStyle, styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: hp(6),
    paddingBottom: hp(0.4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: globalColors.primary,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: wp(2),
    marginTop: hp(1),
  },
  text: {
    fontSize: hp(2.2),
    fontWeight: '500',
    fontFamily: globalFonts.medium,
    color: '#000',
  },
});

export default GlobalButton;
