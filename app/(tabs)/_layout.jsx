import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from "expo-router"
import {Slot, Stack} from "expo-router";
const RootLayout = () => {
  return (
<stack>
  <Stack.Screen name="index" options={{headerShown:false}}/>
    
</stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container:{
display:'flex',
flex:1,
alignItems:'center',
justifyContent:'center'
  }
})