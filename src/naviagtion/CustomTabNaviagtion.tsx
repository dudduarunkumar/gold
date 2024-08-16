//@ts-nocheck
import React from 'react';
import {View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { globalColors } from '../utiles/GlobalColors';

const CustomTabNavigation = ({state, descriptors, navigation, icons}) => {
  const width = Dimensions.get('window').width;
  const tabWidth =wp(93.8) / state.routes.length;
  const translateX = useSharedValue(0);

  const [currentTabIndex, setCurrentTabIndex] = React.useState(state.index);

  React.useEffect(() => {
    translateX.value = withTiming(currentTabIndex * tabWidth, {duration: 300});
  }, [currentTabIndex]);

  const handlePress = index => {
    setCurrentTabIndex(index);
    navigation.navigate(state.routes[index].name);

    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
    });

    if (!state.index === index && !event.defaultPrevented) {
      navigation.navigate(state.routes[index].name);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={{backgroundColor:'#222323'}}>
      <View style={styles.container}>
        <Animated.View style={[styles.slidingBackground, animatedStyle]} />
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const iconName = icons[route.name];

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => handlePress(index)}
              style={styles.tab}>
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={globalColors.primary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222323',
    borderWidth: 1,
    borderColor: globalColors.primary,
    position: 'relative',
    height: hp(8),
    marginHorizontal: wp(3),
    marginVertical: hp(2),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  slidingBackground: {
    position: 'absolute',
    bottom: hp(1),
    left: wp(5.4),
    borderRadius: 80,
    width: Dimensions.get('window').width / 8,
    backgroundColor: '#2e2d2c',
    aspectRatio: 1,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabNavigation;
