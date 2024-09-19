import React from 'react';
import { Text, View} from 'react-native';
import {Link } from "expo-router"
const HelloComponent = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={styles.text}>Hi, Jhone!</Text>
      <Link href="/profile" style={{color:'blue'}}>Go To Profile</Link>
    </View>
  );
};


export default HelloComponent;
