import React from 'react';
import {StyleSheet, View,Text,TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/components/header/Header';
import BackButton from 'react-native-vector-icons/MaterialIcons'
const AddCurrency = ({navigation}) => {
  const {Listofcrypro} = useSelector(state => state.cryptoAppState);
  const [currency,setcurrency] = React.useState('')
  const dispatch = useDispatch();
  React.useEffect(() => {
  }, []);

  const addcryptocurrency = () =>{
    currency == ''? alert('Enter the currency'): navigation.goBack()
   
  }
 
  return (
    <View style={styles.container}>
      <View
       style={{width:'100%',marginTop:60,paddingLeft:20,flexDirection:'row'}}>
         <BackButton
          name ={'arrow-back-ios'}
          size={30}
          color={'#516C86'}
          onPress={()=>{
            navigation.goBack()
          }}
         />
         <Text style={{marginLeft:10,fontSize:19,color:'#516C86',marginTop:5}}>Back to List</Text>
      </View>
      <View style={{width:'100%',height:'80%',justifyContent:'center',alignItems:'center'}}>
           <Text style={{marginLeft:30,fontSize:25,color:'black',marginTop:5,textAlign:'left',alignSelf:'flex-start',fontWeight:'bold',marginBottom:10}}>Add a Cryptocurrency</Text>
           <TextInput
             style={{width:'90%',height:50,borderColor:'#FBD24D',borderWidth:2,paddingLeft:10}}
             placeholder={'Add currency'}
             onChangeText={(text)=>{
              setcurrency(text)
             }}
           />
           <TouchableOpacity
            onPress={()=>{
              addcryptocurrency()
            }}
            style={{width:'30%',height:50,backgroundColor:'#FBD24D',marginTop:20,alignSelf:'flex-end',marginRight:20,borderRadius:5,justifyContent:'center',alignItems:'center'}}
           >
              <Text style={{fontSize:19,color:'#516C86',fontWeight:'bold'}}>Add</Text>
           </TouchableOpacity>
         </View>
    </View>
  );
};


export default AddCurrency;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }, 
  headerStyle: {
    flex: 1,
   // height: 40,
    width: '100%',
   
    justifyContent: 'center',
    alignItems: 'center',
  },
});
