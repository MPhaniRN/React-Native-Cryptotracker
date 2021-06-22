import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {rootSwitch} from 'src/config/navigator';
import {useDispatch, useSelector} from 'react-redux';
import {updateListofCrypto} from 'src/utils/GeneralSlice';
import {getmessariassets} from 'src/utils/service';
import Header from 'src/components/header/Header';
import CryptoRow from 'src/components/crptodetails/cryptorow';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import Delete from 'react-native-vector-icons/AntDesign'
import Swipeout from 'react-native-swipeout';



const CryptoList = ({navigation}) => {
  const {Listofcrypro} = useSelector(state => state.cryptoAppState);
  const dispatch = useDispatch();
  const [openindex,setopenindex] = React.useState({})

  React.useEffect(() => {
    getmessarilivedata();
  }, []);

  const getmessarilivedata = async () => {
    setInterval(async() => {
      try {
        const getmessariliveresponse = await getmessariassets();
        if(getmessariliveresponse && getmessariliveresponse.data.length>0){
          dispatch(updateListofCrypto(getmessariliveresponse.data));
        }
      } catch (error) {
      }
   },3000);
   
  };
  const footer = () => {
    return (
      <TouchableOpacity
        style={styles.headerStyle}
        onPress={() => {
          navigation.navigate(rootSwitch.AddCurrency);
        }}>
        <Text
          style={{
            marginTop: 30,
            color: '#385775',
            fontWeight: '600',
            fontSize: 17,
          }}>
          + Add a crypto currency
        </Text>
      </TouchableOpacity>
    );
  };
  const renderLoader = () => {
    return (
      <View style={{height: 100, padding: 10}}>
        <ContentLoader
          backgroundColor={'#cdcdcd'}
          viewBox="0 0 380 70"
          animate={true}
          speed={0.5}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
       
      </View>
    );
  };
  const deleteitemfromredux = () =>{
    var ListTobeDeleted = Listofcrypro
    var newArrayAfterDeleted = []
    for (let index = 0; index < ListTobeDeleted.length; index++) {
     const element = ListTobeDeleted[index]
     if(element.symbol != openindex.symbol){
      newArrayAfterDeleted.push(element)
     }
    }
    dispatch(updateListofCrypto(newArrayAfterDeleted)) 
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const swipeSettings = {
    autoClose: true,
    right: [
        { 
            onPress: () => {
              deleteitemfromredux()
            }, 
            text: 'Delete', type: 'delete' , backgroundColor: '#EB2341',
            component:<View style={{backgroundColor:'#EB2341',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <Delete
                  name={'delete'}
                  color ={'white'}
                  size={20}>
                </Delete>
            </View>
        }
    ], 
    
}; 

  return (
    <View style={styles.container}>
      <Header />
      {Listofcrypro.length > 0 ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={Listofcrypro}
          keyExtractor={(item, index) => item.id}
          ListFooterComponent={footer}
          renderItem={({item,index}) => (
            <Swipeout
              onOpen={({secId, rowId, direction}) => {
                setopenindex(item)
              }}
              {...swipeSettings}>
              <CryptoRow
                nameofRow={item.name}
                imageRow={
                  'https://messari.io/asset-images/' + item.id + '/32.png?v=2'
                }
                symbol={item.symbol}
                currency={formatter.format(item.metrics.market_data.price_usd)}
                bitcoinvalue ={item.metrics.market_data.percent_change_usd_last_24_hours}
              />
            </Swipeout>
          )}
        />
      ) : (
        renderLoader()
      )}
    </View>
  );
};

export default CryptoList;
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
