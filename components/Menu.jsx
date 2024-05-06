import React from 'react'
import { Button, StyleSheet, Text, View,SafeAreaView, TextInput, FlatList, ScrollView,Dimensions} from 'react-native';
export default function Menu({navigation}) {
  console.log(Dimensions.get('window').height-500)
    return (
   
        <>
        <View style={{
        flexDirection:'row',gap:30,justifyContent:'center',paddingTop:20,paddingBottom:10}}>
        {/* <Button style={{flex:1}}
          title="Главная"
          onPress={() =>
            navigation.navigate('Home')
          }
        /> */}
           <Button style={{flex:2}}
          title="О приложении"
          onPress={() =>
            navigation.navigate('About')
          }
        />
        </View>
        </>
      );
    };
   

