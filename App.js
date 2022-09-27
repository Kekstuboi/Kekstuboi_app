import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import MenuScreen from './screen/MenuScreen';
import CarteScreen from './screen/CarteScreen';
import DesScreen from './screen/DesScreen';
import AutresScreen from './screen/AutresScreen';
import AddPlayerScreen from './screen/AddPlayerScreen';
import KeksploseScreen from './screen/KeksploseScreen';

export default function App() {
  const [loaded] = useFonts({
    'foo': require('./assets/fonts/foo.otf'),
    'Kanit-Light': require('./assets/fonts/Kanit-Light.ttf'),
    'Kanit-Thin': require('./assets/fonts/Kanit-Thin.ttf'),
    'SecularOne-Regular': require('./assets/fonts/SecularOne-Regular.ttf'),
    'soup': require('./assets/fonts/soupofjustice.ttf'),
    'stl': require('./assets/fonts/SomeTimeLater.otf'),
    'AlegreyaTitre': require('./assets/fonts/AlegreyaSansSC-Black.ttf'),
    'AlegreyaText': require('./assets/fonts/AlegreyaSansSC-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  };

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu"
          screenOptions={{
            title: 'Menu',
            headerTintColor: 'white', // pour ajouter des options de design sur toutes les pages
            contentStyle: { backgroundColor: '#8f7768' },
          }}>
          <Stack.Screen name="MenuScreen" component={MenuScreen}
            options={{
              headerShown: false,
              headerStyle: { backgroundColor: '#9e7b67' },
            }} />
          <Stack.Screen name="CarteScreen" component={CarteScreen}
            options={{
              headerStyle: { backgroundColor: '#c5a960' },
            }} />
          <Stack.Screen name="AddPlayerScreen" component={AddPlayerScreen}
            options={{
              headerStyle: { backgroundColor: '#649464' },
            }} />
            <Stack.Screen name="KeksploseScreen" component={KeksploseScreen}
            options={{
              headerStyle: { backgroundColor: '#649464' },
              contentStyle: { backgroundColor: '#649464' },
              headerShown: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}