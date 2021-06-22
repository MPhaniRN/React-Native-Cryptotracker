import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {rootSwitch} from 'src/config/navigator';
import CryptoList from 'src/screens/CryptomainList';
import AddCurrency from 'src/screens/AddCurrency'
const Stack = createStackNavigator();

function RootStack({}) {
  /**
   * Hide Splash after fetch data
   */
  

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={rootSwitch.CryptomainList} component={CryptoList} />
      <Stack.Screen name={rootSwitch.AddCurrency} component={AddCurrency} />
    </Stack.Navigator>
  );
}



export default (RootStack);
