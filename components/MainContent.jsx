import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View,SafeAreaView, TextInput, FlatList, ScrollView,Dimensions} from 'react-native';
import ItemForRender from './ItemForRender';
import { MyContext } from '../Context/MainContext';
export default function MainContent({navigation}) {
  const {arrs} = useContext(MyContext)
  return (
  <>
    <FlatList style={{width:Dimensions.get('window').width,paddingLeft:20,paddingRight:20}}
      data={arrs} 
      keyExtractor={(item, index) => String(index)}
      renderItem={({item}) =>(<ItemForRender navigation={navigation}  item={item}/>)} horizontal={false} />
<View style={{marginBottom:200}}><Text></Text></View> 
</>
  )
}
