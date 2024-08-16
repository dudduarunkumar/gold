//@ts-nocheck
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import GlobalButton from '../global Componets/GlobalButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalColors} from '../utiles/GlobalColors';
import {globalFonts} from '../utiles/GlobalFonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../global Componets/Card';
import GlobalModal from '../global Componets/GlobalModal';
import {modalContext} from '../context/GlobalContext';

const paymentData = [
  {
    id: 1,
    titlle: 'Gold Price',
    cost: '₹5,211.20/g',
  },
  {
    id: 2,
    titlle: 'Gold Weight Bought',
    cost: '0.3912g',
  },
  {
    id: 3,
    titlle: 'SubTotal Amount',
    cost: '₹2,038.84',
  },
  {
    id: 4,
    titlle: 'Total Tax (3% GST)',
    cost: '₹61.16',
  },
];
const Buy = ({naviagtion}) => {
  const context = useContext(modalContext);
  console.log(context, 'lllllll');

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
            marginLeft: wp(10),
            paddingVertical: hp(1),
          }}>
          <Image
            resizeMode="cover"
            style={{height: hp(6), width: wp(10)}}
            source={require('../assets/images/gold.png')}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: wp(10),
              // alignItems: 'center',
            }}>
            <Text style={styles.smText}>Gold Weight</Text>
            <Text
              style={[
                styles.headerText,
                {
                  fontSize: hp(2.7),
                  textAlign: 'left',
                  fontFamily: globalFonts.bold,
                },
              ]}>
              0.3912g
            </Text>
          </View>
        </View>
      </Card>

      <Card>
        <View
          style={{paddingHorizontal: wp(2), gap: 15, paddingVertical: hp(2)}}>
          <Text style={styles.text}>Payment Summary:</Text>
          {paymentData.map(ele => {
            return (
              <View
                key={ele.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.smText}>{ele.titlle}</Text>
                <Text style={styles.text}>{ele.cost}</Text>
              </View>
            );
          })}
          <View
            style={{borderWidth: 0.5, width: wp(85), alignSelf: 'center'}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {fontFamily: globalFonts.bold}]}>
              Grand Total{' '}
            </Text>
            <Text
              Text
              style={[
                styles.text,
                {fontFamily: globalFonts.bold, fontSize: hp(2.5)},
              ]}>
              ₹2,100.00
            </Text>
          </View>
        </View>
      </Card>
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: wp(2),
            paddingVertical:hp(1.2)

          }}>
          <Text
            style={{
              fontSize: hp(2.3),
              fontFamily: globalFonts.bold,
              color: globalColors.primary,
              // paddingVertical: hp(1.2),
            }}>
            Apply Promocode
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={25}
            color={globalColors.primary}
          />
        </View>
      </Card>
      <View
        style={{
          marginVertical: hp(2),
          flexDirection: 'row',
          borderWidth: 0.5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'center',
            borderRightWidth: 0.5,
            paddingVertical: hp(1),
          }}>
          <MaterialCommunityIcons
            name="gold"
            size={35}
            color={globalColors.primary}
          />
          <View style={{marginLeft: wp(1)}}>
            <Text style={[styles.smText, {fontSize: hp(1.2)}]}>24k 999.9</Text>
            <Text style={[styles.smText, {fontSize: hp(1.2)}]}>Purest</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'center',
            paddingVertical: hp(1),
          }}>
          <MaterialCommunityIcons
            name="id-card"
            size={35}
            color={globalColors.primary}
          />
          <View style={{marginLeft: wp(1)}}>
            <Text style={[styles.smText, {fontSize: hp(1.2)}]}>
              100% Secured
            </Text>
            <Text style={[styles.smText, {fontSize: hp(1.2)}]}>
              and owned vault
            </Text>
          </View>
        </View>
      </View>

      <GlobalButton
        title="Proceed to Pay  ₹2,100"
        onPress={() => context.openModal(true)}
      />
      {context.open && <GlobalModal />}
    </View>
  );
};

export default Buy;

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
