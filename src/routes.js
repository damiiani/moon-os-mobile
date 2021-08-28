import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderTitle from './components/HeaderTitle';

import About from './pages/About';
import Home from './pages/Home';

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#3d43b8' },
        drawerActiveBackgroundColor: '#5d63d4',
        drawerStyle: { backgroundColor: '#3d43b8' },
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#ffffff',
      }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
            title: 'Página inicial',
            headerTitle: ({ children }) => <HeaderTitle title={children} />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            ),
            title: 'Sobre',
            headerTitle: ({ children }) => <HeaderTitle title={children} />,
          }}

        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
