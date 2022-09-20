/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {type PropsWithChildren} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import HomeScreen from '@features/dashboard/screens/home/HomeScreen';
 // import { NavigationContainer } from '@core/router/AppNavigator';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RepReach"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#542bd9',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   );
 };
 
 
 export default App;
 