/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/home/Home';
import Details from './components/details/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Feature from './components/features/page/Feature';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
 
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={Details} options={{ title: 'Details Page' }}/>
      <Stack.Screen name="Features" component={Feature} options={{ title: 'Features Page' }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}




export default App;
