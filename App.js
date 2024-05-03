
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View,SafeAreaView, TextInput, FlatList, ScrollView} from 'react-native';
import { Dimensions } from 'react-native'
import {Linking} from 'react-native'
export default function App() {
const [textInp, onChangeText] = useState('');

// const arr = [
//   {id:1, fio:'Горбачев Вячеслав Викторович',dolj:'Генеральный директор',workPhone:'211',cityPhone:'52-26-01', mobPhone:'(29) 5281135'},
//   {id:2, fio:'Хутный Александр Францевич',dolj:'Первый заместитель генерального директора - главный инженер',workPhone:'282',cityPhone:'52-59-41', mobPhone:'(33) 9901068'},
//   {id:3, fio:'Хайрутдинова Ольга Николаевна',dolj:'Секретарь приемной руководителя',workPhone:'225, 257',cityPhone:'52-26-01', mobPhone:'(29) 7061503'},
//   {id:4, fio:'Пашкель Татьяна Валентиновна',dolj:'Секретарь приемной руководителя',workPhone:'225, 257',cityPhone:'52-26-01', mobPhone:'(29) 7061503'},
//   {id:5, fio:'Ивашко Галина Станиславовна',dolj:'Секретарь приемной руководителя',workPhone:'225, 257',cityPhone:'52-26-01', mobPhone:'(29) 7061503'},
// ]



async function getTimes() {
  const res =  await fetch(`http://192.168.155.181:3001/`,{ referrer:'unsafe-url'})
     .then(response => response.json())
     .then(data => {
    
      setArrs(Object.values(data))
   } 
   )
     .catch(error => console.error(error))
 }



const [arrs, setArrs] = useState([])

  // const handleButton = () => {
  //   fetch('http://gepir.gs1by.by/Home/response', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       keyValue: parseInt(textInp),
  //       requestTradeItemType: 'information',
  //       'X-Requested-With': 'XMLHttpRequest',
  //     }),
  //   }).then(response => response.text()).then(response =>{
  //     const rootNode = DomSelector(response);
     
  //       setValue(rootNode.children[2].children[0].children[1].children[1].children[0].text);
    

  //   } )
  //   .catch(error => {
  //     setValue('Ошибка!!!')
  //   });
   
  // }
useEffect(()=>{
  getTimes()
},[])
  return (
    <SafeAreaView  style={styles.container}>

   <View ><Text style={{color:'red',fontSize:15,textAlign:'center',fontWeight:'bold',paddingBottom:20}}>Телефонный справочник LIDKON</Text></View>
 
   <View>
        <TextInput   style={{fontSize:30 ,borderWidth:3,borderRadius:20, padding:5, width:250,textAlign:'center'}}    onChangeText={text => {
      
      
      const promise = new Promise((resolve,reject)=>{
        onChangeText(text)
        //getTimes()
        resolve()
      })
      
      promise.then(()=>{
        if (text.length>1) { 
         setArrs(arrs.filter((item)=> JSON.stringify(item).toLocaleLowerCase().includes(textInp.toString().toLocaleLowerCase())))
        }
        if(text.length == 0 ) {
          getTimes()
        }
      })

    }

      
    
    
    }
        value={textInp} placeholder='Введите ФИО' />
      </View>
      <View>
    
        <ScrollView>
      <FlatList style={{width:Dimensions.get('window').width,paddingLeft:20,paddingRight:20}}
        data={arrs} 
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) =>(<>
      <View  style={{borderWidth:2,borderRadius:22,padding:10,flex:1, marginTop:30,flexDirection: 'column', textAlign:'center'}}>
        <Text style={{flex:2, textAlign:'center',paddingTop:10,fontSize:25,fontWeight:'bold'}} >{item.fio}</Text>
        <Text  style={{flex:3, textAlign:'center',paddingBottom:20,paddingTop:10, color:'red'}}>{item.dolj}</Text>
        <Text style={{flex:4,textAlign:'center',fontSize:30}}>
        <Button style={{flex:5}} onPress={()=>Linking.openURL(`tel:${item.cityPhone}`)} title={item.cityPhone}/>
        <View  style={{paddingLeft:10,flex:6}}></View>
        <Button onPress={()=>Linking.openURL(`tel:${item.mobPhone}`)} style={{flex:6,}} title={item.mobPhone}/>

        <View  style={{paddingLeft:10,flex:7}}></View>
        <Button style={{flex:8}} title={item.workPhone}/>

        </Text>
      </View>
</>)} horizontal={false} />
<View style={{flex:0,paddingTop:30,paddingLeft:20,paddingRight:20}}><Button color='black' title='Заказать'/></View>
<View style={{marginBottom:40}}><Text></Text></View> 
            </ScrollView>
            
    </View>

      {/* <View>
      <Text>{value}</Text>
      </View>
      <View>
        <TextInput     onChangeText={text => onChangeText(text)}
        value={textInp} placeholder='Tedxt' />
      </View>
      <View style={styles.myBtn} >
      <Button  color='red'   onPress={handleButton} title='Запроситьss3'/>
      </View> */}
       
    </SafeAreaView>
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
