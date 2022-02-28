import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,TextInput,Text, View,SafeAreaView } from 'react-native';
import { useState } from 'react';




export default function App() {
  const[push,setpush]=useState('')
  const[pull,setpull]=useState('')
  const[color,setcolor]=useState('blue')
  return (
  <View style={styles.container}>
    <SafeAreaView>
    
    <TextInput
    style={[styles.push,{borderColor:color,}]}
    onChangeText ={(password)=>{
      setpush(password);
      console.log(push.length)
      if(push.length<=3){
        setpull('weak')
        setcolor('red')
      }
      else if(push.length <=5){
        setpull('medium')
        setcolor('yellow')
      }

      else if(push.length>=8){
        setpull('strong')
        setcolor('green')
      }
     
    }}/>
    
    <Text>{pull}</Text>
    </SafeAreaView>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  push:{
    height: 40,
    width:150,
    borderWidth: 5,
   
    padding: 10,
  },
 

});
