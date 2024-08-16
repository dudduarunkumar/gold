import { View,  StyleSheet } from 'react-native'
import React from 'react'
import Navigation from './src/naviagtion/Navigation';
import GlobalContext from './src/context/GlobalContext';


const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#222323'}}>
      <GlobalContext>
        <Navigation />
      </GlobalContext>
    </View>
  );
}

export default App


const styles=StyleSheet.create({
  mainConatiner:{
flex:1,
justifyContent:'center',
alignItems:'center'
  }
})