import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import {Text, View} from 'react-native';
import CartScreen from './src/pages/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Movies',
            headerTitleAlign: 'center',
            animationEnabled: true,
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          name="cart"
          component={CartScreen}
          options={{
            title: 'Cart',
            headerTitleAlign: 'center',
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
