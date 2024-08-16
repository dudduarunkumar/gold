//@ts-nocheck
import { View, Text, Image } from 'react-native';
import React from 'react';
import GlobalButton from '../global Componets/GlobalButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet } from 'react-native';
import { globalColors } from '../utiles/GlobalColors';
import { globalFonts } from '../utiles/GlobalFonts';
import Card from '../global Componets/Card';

const Invoice = ({navigation}:any) => {

    const goToHome = async () => {
       await navigation.navigate('TabNav');
    };


    return (
      <View
        style={{flex: 1, backgroundColor: '#222323', paddingHorizontal: wp(3)}}>
        <View
          style={{
            marginTop: hp(7),
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:hp(2)
          }}>
          <MaterialCommunityIcons
            name="podium-gold"
            size={70}
            color={globalColors.primary}
          />
          <Text
            style={[
              styles.headerText,
              {marginVertical: hp(2), width: wp(65), textAlign: 'center'},
            ]}>
            You have Scuccssfully Purchased 0.3912g digital gold
          </Text>
        </View>
        <Card>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: hp(2),
              paddingHorizontal: wp(3),
            }}>
            <View style={{rowGap: 15}}>
              <View>
                <Text style={styles.smText}>Gold Price</Text>
                <Text style={styles.headerText}>₹5,211.20/g</Text>
              </View>

              <View>
                <Text style={styles.smText}>SubTotal Amount</Text>
                <Text style={styles.headerText}>₹2,038.83</Text>
              </View>
            </View>

            <View style={{marginLeft: wp(15), rowGap: 15}}>
              <View>
                <Text style={styles.smText}>Gold Weight Bought</Text>
                <Text style={styles.headerText}>0.3912g</Text>
              </View>

              <View>
                <Text style={styles.smText}>Gold Weight Bought</Text>
                <Text style={styles.headerText}>₹61.17</Text>
              </View>
            </View>
          </View>
        </Card>

        <Card>
          <View
            style={{
              paddingHorizontal: wp(4),
              paddingVertical: hp(2),
              rowGap: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.smText, {fontSize: hp(1.8)}]}>
                Order ID{' '}
              </Text>
              <Text style={styles.text}>GS9019284250012 </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.smText, {fontSize: hp(1.8)}]}>Date </Text>
              <Text style={styles.text}>Sun March 20 2022 </Text>
            </View>
          </View>
        </Card>
        <View style={{marginTop: hp(2)}}>
          <GlobalButton title="Order History" />
        </View>
        <View style={{marginTop: hp(2)}}>
          <GlobalButton title="Download Invoice" icon="download" />
        </View>
        <View style={{marginTop: hp(4)}}>
          <GlobalButton title="Back to Home" onPress={goToHome} />
        </View>
      </View>
    );
};

export default Invoice;

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
        // width: wp(35),
       
    },
    smText: {
        fontSize: hp(1.5),
        fontFamily: globalFonts.reguler,
        color: globalColors.primary,
        fontWeight:'100'
    },
});
