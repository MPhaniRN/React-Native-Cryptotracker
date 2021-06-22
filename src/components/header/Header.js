import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
/**
  @param {} selectedindex
 * @returns 
 */

const Header = ({
  headerLabel = 'Crypto Tracker Pro',
  onPressLeft = () => {},
 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
         <Text style={styles.fontStyle}>{headerLabel}</Text>
      </View>
      <View style={styles.right}>
        <Image
          style={{width:50,height:50,borderRadius:50/2,paddingRight:20}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iAP6Wl-4uMaS9EzTXNA-gVaOGaf3pd-Fmw&usqp=CAU'}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: hp('15%'),
    backgroundColor:'#385775'
  },
  imagesize: {
    width: 30,
    height: 30,
  },
  left: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:30,
    marginTop:20

  },
  right: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  fontStyle: {
    fontSize:23,
    color: 'white',
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontWeight:'bold'
  },
});
