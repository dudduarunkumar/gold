//@ts-nocheck
import React, { useContext, useRef, useEffect } from 'react';
import { View, Modal, StyleSheet, Text, Animated, Easing } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GlobalTextInput from './GlobalTextInput';
import Entypo from 'react-native-vector-icons/Entypo';
import { globalColors } from '../utiles/GlobalColors';
import { globalFonts } from '../utiles/GlobalFonts';
import GlobalButton from './GlobalButton';
import { modalContext } from '../context/GlobalContext';
import { useNavigation } from '@react-navigation/native';

const GlobalModal = () => {
  const context = useContext(modalContext);
  const slideAnim = useRef(new Animated.Value(hp(100))).current;
const navigation = useNavigation();

  useEffect(() => {
    if (context.open) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: hp(100),
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        context.openModal(false);
      });
    }
  }, [context.open]);

  const goToPayment = async () => {
       context.openModal(false);
       await navigation.navigate('Payment');
  };

  return (
    <Modal transparent={true} visible={context.open} animationType="none">
      <View style={styles.modalContainer}>
        <Animated.View
          style={[
            styles.bgCard,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: hp(2),
              }}
            >
              <Text style={styles.headerText}>InVoice Details</Text>
              <Entypo
                name="circle-with-cross"
                size={25}
                color={globalColors.primary}
                onPress={() => {
                  Animated.timing(slideAnim, {
                    toValue: hp(100),
                    duration: 1000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                  }).start(() => {
                    context.openModal(false);
                  });
                }}
              />
            </View>
            <View>
              <Text style={styles.headerText}>Name</Text>
              <GlobalTextInput placeholder="Enter Your Name" />
            </View>
            <View>
              <Text style={styles.headerText}>PinCode</Text>
              <GlobalTextInput keyboardType="number-pad" placeholder="Enter Your PinCode" />
            </View>
            <View style={{ marginTop: hp(2) }}>
              <GlobalButton title="Proceed "   onPress={goToPayment} />
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bgCard: {
    width: '100%',
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2e2d2c',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 1,
    backgroundColor: '#2e2d2c',
  },
  modalContent: {
    paddingVertical: hp(5),
    width: wp(94),
    alignSelf: 'center',
    paddingHorizontal: wp(3),
    gap: 10,
  },
  headerText: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(2),
  },
});

export default GlobalModal;
