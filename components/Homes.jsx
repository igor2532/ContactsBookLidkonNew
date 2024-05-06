import React, { useContext, useEffect } from 'react'
import {  View,SafeAreaView, Button} from 'react-native';
import Title from './Title';
import MyInput from './MyInput';

import MainContent from './MainContent';
import AboutContent from './AboutContent';
import { MyContext } from '../Context/MainContext';
import Menu from './Menu';



export default function Homes({navigation}) {
 
 const { styles,onChangeText,getTimes,setArrs,arrs,textInp } = useContext(MyContext)
 useEffect(()=>{
  navigation.setOptions({
    title: 'Телефонный справочник',
  });
},[])
  return (
    <SafeAreaView>   
    <Menu navigation={navigation} />
      {/* <Title/> */}
  <MyInput  onChangeText={onChangeText} getTimes={getTimes}  setArrs={setArrs} arrs={arrs} textInp={textInp} />
      <View> 
    </View>
    <MainContent navigation={navigation}  />
    </SafeAreaView>
  )
}
