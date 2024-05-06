import React, { useEffect } from 'react'
import { Text } from 'react-native'
export default function AboutContent({navigation}) {
  useEffect(()=>{
    navigation.setOptions({
      title: 'О приложении',
    });
  },[])
  return (
   <Text>Данное приложение разработано 06.05.2024</Text>
  )
}
