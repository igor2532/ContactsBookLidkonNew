import React, { useEffect } from 'react'
import {  View, Button,Text,Linking, Image} from 'react-native';
export default function FullPage({navigation,route}) {
    const {item} = route.params;  
    useEffect(()=>{
        navigation.setOptions({
          title: 'Подробно о контакте...',
        });
      },[])
    
  return (
    <View  style={{padding:10 ,marginTop:30,textAlign:'center',flexDirection:'column'}}>
      <Text style={{ textAlign:'center',paddingTop:10,fontSize:25,fontWeight:'bold'}} >{item.fio}</Text>
      <Text  style={{textAlign:'center',paddingBottom:20,paddingTop:10, color:'red'}}>{item.dolj}</Text>
      <View style={{alignItems:'center',paddingBottom:20}}><Image style={{width:300,height:250}} source={{uri:item.urlImg}} /></View>
      <Text style={{textAlign:'center',fontSize:30}}>
      <Button onPress={()=>Linking.openURL(`tel:${item.cityPhone}`)} title={item.cityPhone}/>
      <View  style={{paddingLeft:10}}></View>
      <Button onPress={()=>Linking.openURL(`tel:${item.mobPhone}`)} style={{}} title={item.mobPhone}/>
      <View  style={{paddingLeft:10}}></View>
      <Button style={{}} title={item.workPhone}/>
      <View  style={{paddingLeft:10}}></View>
      
      </Text>
    </View>
  )
}
