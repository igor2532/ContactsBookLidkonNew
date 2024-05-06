import React from 'react'
import { Text, View,TextInput} from 'react-native';

export default function MyInput({onChangeText,getTimes,setArrs,arrs,textInp}) {
  return (
    <View style={{alignItems:'center',paddingBottom:20,paddingTop:20}}>
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
  )
}
