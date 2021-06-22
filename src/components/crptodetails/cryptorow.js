import React from 'react';
import {
  StyleSheet,
  View,
  Image,Text
} from 'react-native';
import Arrow from 'react-native-vector-icons/Feather'
/**
  @param {} selectedindex
 * @returns 
 */

const Cryptodetailrow = ({
  CryptodetailrowLabel = 'Crypto Tracker Pro',
  onPressLeft = () => {},
  imageRow = '',
  nameofRow = '',
  symbol='',
  currency = '',
  bitcoinvalue=''
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
       <Image
          style={{width:50,height:50,borderRadius:50/2,paddingRight:0}}
          resizeMode={'contain'}
          source={{uri:imageRow}}
        />
      </View>
      <View style={styles.right}>
         <Text style={{color:'black',alignSelf:'flex-start',fontWeight:'700'}}>{nameofRow}</Text>
         <Text style={{alignSelf:'flex-start',fontWeight:'200',marginTop:10}}>{symbol}</Text>
      </View>
      <View style={[styles.left,{flex:0.3}]}>
        <Text style={{color:'black',alignSelf:'flex-end',fontWeight:'700'}}>{currency}</Text>
        <Text style={{color: bitcoinvalue>0?'green':'red',alignSelf:'flex-end',fontWeight:'700',marginTop:20}}><Arrow size={15} name={bitcoinvalue>0?'arrow-up-right':'arrow-down-left'}></Arrow>{' '}{(bitcoinvalue.toFixed(2))}
        </Text>
      </View>
     
    </View>
       
    
  );
};

export default Cryptodetailrow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    padding:10,
    borderBottomWidth:1,
    alignSelf:'center',
    borderColor:'#cdcdcd',
    paddingBottom:30,
  },
  imagesize: {
    width: 30,
    height: 30,
  },
  left: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:0,
    marginTop:20,
    marginLeft:-10

  },
  right: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    paddingLeft:10
  },
  fontStyle: {
    fontSize:23,
    color: 'white',
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight:'bold'
  },
});
