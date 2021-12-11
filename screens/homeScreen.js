import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {{fontSize: 20}}>Welcome to Your</Text>
      <Text style= {{fontSize: 30,color: "blue",fontWeight: 40}}> VPS </Text>

      <View>
        <Text style={{fontSize: 20}}>
        
         </Text>
         <Image
               styles={styles.mircoImg,{width: 80}}
               source={{uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fmicrophone-342.html&psig=AOvVaw1_w0gYsnNdYjFwNXNq0jK0&ust=1639339884877000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjTxJzH3PQCFQAAAAAdAAAAABAK"}}
             />
         <TouchableOpacity
          /*onPress={() =>
          }*/>
             
            
         </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mircoImg: {
    paddingUp: 40,
    height: 50,
  },

});
