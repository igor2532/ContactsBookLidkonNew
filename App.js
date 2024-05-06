import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View,SafeAreaView, TextInput, FlatList, ScrollView} from 'react-native';
import { Dimensions } from 'react-native'
import {Linking} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Title from './components/Title';
import MyInput from './components/MyInput';
import MainContent from './components/MainContent';
import {MyContext}  from './Context/MainContext';
import Homes from './components/Homes';
import Menu from './components/Menu';
import AboutContent from './components/AboutContent';
import FullPage from './components/FullPage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo';
export default function App() {
const Stack = createNativeStackNavigator();
const [textInp, onChangeText] = useState('');
const [isConnected, setConnected] = useState(true);
async function getTimes() {

if (isConnected) {
  const res =  await fetch(`https://mongoapi-ebdn.onrender.com/`,{ referrer:'unsafe-url'})
  .then(response => response.json())
  .then(data => {
   setArrs(Object.values(data))
} 
).then(data=>{
 AsyncStorage.setItem(
   'myKey',
   JSON.stringify(arrs))
})
  .catch(error => {
  })
}
else {
  AsyncStorage.getItem('myKey', (err, result) => {
    setArrs(result);
  });
}

 
 }
const [arrs, setArrs] = useState([])
 
useEffect(() => {
  const unsubscribe = NetInfo.addEventListener((state) => {
    setConnected(state.isConnected);
  });
  unsubscribe();
  getTimes()

}, []);

const myConstsForProvider ={styles:styles,onChangeText:onChangeText,getTimes:getTimes,setArrs:setArrs,arrs:arrs,textInp:textInp}


  return (
    <NavigationContainer>
    <MyContext.Provider value={myConstsForProvider}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homes}/>
        <Stack.Screen name="About"  component={AboutContent} />
        <Stack.Screen name="FullPage"  component={FullPage} />
      </Stack.Navigator>
      </MyContext.Provider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80,
  
  },
  myBtn : {
    margin:30
  }
});
