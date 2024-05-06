import React, { useContext } from 'react'
import { Button, Text, View,Image, Touchable, TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
export default function ItemForRender({navigation,item}) {

  return (
    <> 
    <TouchableWithoutFeedback  onPress={()=> navigation.push('FullPage',{item})}>
    <View  style={{
       backgroundColor: 'white',
       borderRadius: 8,
      paddingTop:20,
   
       width: '100%',
       justifyContent:'center',
      flex:1, marginTop:10,flexDirection: 'column', textAlign:'center'}}>
       <View style={{alignItems:'center',paddingBottom:10}}><Image style={{width:60,height:60}} source={{uri:item.urlImg}} /></View>
      <Text style={{flex:2, textAlign:'center',paddingTop:10,fontSize:25,fontWeight:'bold'}} >{item.fio}</Text>
      <Text  style={{flex:3, textAlign:'center',paddingBottom:20,paddingTop:10, color:'red'}}>{item.dolj}</Text>
     
      <View  style={{paddingLeft:10,flex:9}}></View>
     
     <View style={{alignItems:'center'
     }}>
      </View>
    </View>
    </TouchableWithoutFeedback>
</>
  )
}
