import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const GlobalHeader = ({headerTitle,navigation,backgroundColor}) => {


  const arrowBg=backgroundColor  ? { backgroundColor: backgroundColor } : styles.defaultBackground;

  return (

    // <View style={[styles.container, { backgroundColor: backgroundColor }]}>
    
     <View style={styles.container}>
       <TouchableOpacity 
   onPress={()=>navigation.goBack()}
   style={[styles.backarrow, backgroundColor ? { backgroundColor: backgroundColor } : null]}>
   <Feather   name='chevron-left' size={35} color="#FFFFFF" />
   </TouchableOpacity>
    <Text style={styles.headerName}>{headerTitle}</Text>
     <Text>{''}</Text>
       </View>

  )
}

export default GlobalHeader

const styles=StyleSheet.create({

    container:
        {flexDirection:'row',
alignItems:'center',justifyContent:'space-between',
marginTop:hp(4),
marginBottom:hp(2),
width: wp(92),
alignSelf:'center',

    },
    backarrow:{
        borderRadius:16,width:wp(12),height:hp(6),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EA580A',
    
       },
       headerName:{
        fontSize:hp(4),
        color:'black',
        fontWeight:'500',
        marginRight:wp(10)
    
       },
})