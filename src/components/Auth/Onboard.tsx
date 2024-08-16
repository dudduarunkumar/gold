import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  BackHandler,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalColors} from '../../utiles/GlobalColors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalFonts} from '../../utiles/GlobalFonts';

const slides = [
  {
    id: 1,
    image: require('../../assets/images/onboardImage.png'),
    text: 'Trade in Gold ',
    subText:
      'Never miss an opportunity. Receive instant alerts on price changes, market news, and your trade status.',
  },
  {
    id: 2,
    image: require('../../assets/images/Cone.png'),
    text: 'Trade in Gold',
    subText:
      'Never miss an opportunity. Receive instant alerts on price changes, market news, and your trade status.',
  },
  {
    id: 3,
    image: require('../../assets/images/onboardImage.png'),
    text: 'Trade in Gold',
    subText:
      'Never miss an opportunity. Receive instant alerts on price changes, market news, and your trade status.',
  },
];

const Onboard = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const changeSlider = () => {
    if (currentIndex >= 0 && currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    } else {
      flatListRef.current.scrollToIndex({animated: true, index: 0});
    }
  };

  const DotIndicator = ({length, currentIndex}) => {
    return (
      <View style={styles.dotContainer}>
        {Array.from({length: length}).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    const timer = setInterval(() => {
      changeSlider();
    }, 4000);

    return () => {
      backHandler.remove();
      clearInterval(timer);
    };
  }, [currentIndex]);
  return (
    <View style={{flex: 1, backgroundColor: '#222323'}}>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              //   height: hp(30),
              width: wp(100),
              //   borderWidth: 1,
              //   borderColor: 'red',
              paddingHorizontal: wp(4),
              justifyContent: 'flex-end',
              //   paddingBottom:hp(4)
            }}>
            <Image source={item.image} style={styles.circle} />
            <Text style={styles.boldText}>{item.text}</Text>
            <Text style={styles.text}>{item.subText}</Text>
          </View>
        )}
        onScroll={({nativeEvent}) => {
          const slide = Math.round(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
          );
          if (slide !== currentIndex) {
            setCurrentIndex(slide);
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(4),
          marginVertical: hp(8),
        }}>
        <DotIndicator length={slides.length} currentIndex={currentIndex} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              styles.text,
              {marginRight: wp(5)},
            ]}>
            Skip
          </Text>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={70}
            color={globalColors.primary}
            onPress={()=>navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: 'contain',
    alignSelf: 'center',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // marginTop: hp(10),
    marginBottom: hp(10),
  },

  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 30,
    borderRadius: 5,
    backgroundColor: globalColors.primary,
  },
  inactiveDot: {
    backgroundColor: globalColors.secondary,
  },
  boldText: {
    fontSize: hp(5.5),
    fontFamily: globalFonts.bold,
    color: globalColors.primary,
  },
  text: {
    color: globalColors.primary,
    fontFamily: globalFonts.reguler,
    fontSize: hp(2.3),
  },
});
