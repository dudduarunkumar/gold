import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../global Componets/Card';
import {globalColors} from '../utiles/GlobalColors';
import {globalFonts} from '../utiles/GlobalFonts';
import GlobalButton from '../global Componets/GlobalButton';

const paymentMethod = [
  {
    title: 'Card',
    subtitle: 'Pay via Card',
    icon: (
      <MaterialCommunityIcons
        name="credit-card-outline"
        size={40}
        color={globalColors.primary}
      />
    ),
    subIcons: [],
  },
  {
    title: 'Netbanking',
    subtitle: 'Pay via Netbanking',
    icon: (
      <MaterialCommunityIcons
        name="bank"
        size={40}
        color={globalColors.primary}
      />
    ),
    subIcons: [
      <MaterialCommunityIcons
        name="registered-trademark"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="leaf-circle"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="lightning-bolt-circle"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="mastodon"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="microsoft-xbox-controller-view"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="record-circle"
        size={24}
        color={globalColors.primary}
      />,
    ],
  },
  {
    title: 'Wallet',
    subtitle: 'Pay via Wallet',
    icon: (
      <MaterialCommunityIcons
        name="wallet-outline"
        size={40}
        color={globalColors.primary}
      />
    ),
    subIcons: [
      <MaterialCommunityIcons
        name="wallet"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="creative-commons"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="contactless-payment-circle"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="bitcoin"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="billiards"
        size={24}
        color={globalColors.primary}
      />,
      <MaterialCommunityIcons
        name="brightness-auto"
        size={24}
        color={globalColors.primary}
      />,
    ],
  },
  {
    title: 'UPI',
    subtitle: 'Pay via UPI',
    icon: (
      <MaterialCommunityIcons
        name="triforce"
        size={40}
        color={globalColors.primary}
      />
    ),
    subIcons: [],
  },
];

const Payment = ({navigation}) => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#222323', paddingHorizontal: wp(3)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: hp(2),
          paddingRight: wp(1),
        }}>
        <Ionicons
          name="arrow-back-circle"
          size={50}
          color={globalColors.primary}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Confirm Purchase</Text>
        <View>
          <Text style={styles.smText}>Price Valid</Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="time" size={20} color={globalColors.primary} />
            <Text style={styles.smText}> 5:54</Text>
          </View>
        </View>
      </View>

      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: wp(8),
            paddingVertical: hp(2),
            marginVertical: hp(1),
            paddingRight: wp(6),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="cover"
              style={{height: hp(6), width: wp(10)}}
              source={require('../assets/images/gold.png')}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                //   alignItems: 'center',
                marginLeft: wp(8),
              }}>
              <Text style={styles.smText}>Gold Weight</Text>
              <Text
                style={[
                  styles.headerText,
                  {
                    fontSize: hp(2.7),
                    fontFamily: globalFonts.bold,
                    textAlign: 'left',
                  },
                ]}>
                0.3219g
              </Text>
            </View>
          </View>

          <MaterialCommunityIcons
            name="pencil-circle"
            size={40}
            color={globalColors.primary}
          />
        </View>
      </Card>

      <Text
        style={[
          styles.headerText,
          {
            textAlign: 'left',
            width: 'auto',
            //   marginLeft: wp(3),
            marginVertical: hp(1),
            fontSize: hp(2.2),
          },
        ]}>
        Select Payment Method
      </Text>

      {paymentMethod.map(ele => {
        return (
          <Card key={ele.title}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp(7),
                alignItems: 'center',
                marginVertical: hp(1),
              }}>
              <Text>{ele.icon}</Text>
              <View style={{marginLeft: wp(7)}}>
                <Text style={styles.text}>{ele.title}</Text>
                <Text style={styles.smText}>{ele.subtitle}</Text>
                <View style={{flexDirection: 'row', marginTop: 4}}>
                  {ele.subIcons &&
                    ele.subIcons.map((subIcon, index) => (
                      <View key={index} style={{marginRight: wp(2)}}>
                        {subIcon}
                      </View>
                    ))}
                </View>
              </View>
            </View>
          </Card>
        );
      })}
      <View style={{marginVertical: hp(3)}}>
        <GlobalButton
          title="Proceed to Pay ₹2100"
          onPress={() => navigation.navigate('Invoice')}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  text: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(2),
  },
  headerText: {
    color: globalColors.primary,
    fontFamily: globalFonts.medium,
    fontSize: hp(2),
    width: wp(35),
    textAlign: 'center',
  },
  smText: {
    fontSize: hp(1.5),
    fontFamily: globalFonts.reguler,
    color: globalColors.primary,
  },
});
