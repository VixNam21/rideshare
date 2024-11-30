import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import DestinationScreen from '../Screens/DestinationScreen';
import RideHistory from '../Screens/RideHistory';
import Settings from '../Screens/Settings';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const COLORS = {
  background: '#1C1C1C',
  primary: '#D9A1FF',
  iconColor: '#D9A1FF',
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Destination"
        component={DestinationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: COLORS.primary,
          drawerInactiveTintColor: COLORS.primary,
          drawerStyle: { backgroundColor: COLORS.background },
          drawerLabelStyle: { fontWeight: 'bold', color: COLORS.primary },
          drawerIcon: ({ focused, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={COLORS.primary} />
          ),
        }}
      >
        <Drawer.Screen
          name="HomeDrawer"
          component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="RideHistory"
          component={RideHistory}
          options={{
            title: 'Ride History',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
