import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, View, TouchableOpacity, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import HomeScreen from './screens/homeScreen';
import NextScreen from './screens/nextScreen';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
   <View style={styles.container}> 
   
      
      <HomeScreen>
 <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
     </Stack.Navigator>
   </NavigationContainer>

      </HomeScreen>
  
     
        
      
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
});
