// GlobalTextInput.js
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { globalColors } from '../utiles/GlobalColors';

const GlobalTextInput = ({

  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  placeholderTextColor,
  keyboardType,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        maxLength={25}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="grey"
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },

  input: {
    borderBottomWidth: 1,
    fontSize: hp(2),
    color: globalColors.secondary
  },
});

export default GlobalTextInput;
