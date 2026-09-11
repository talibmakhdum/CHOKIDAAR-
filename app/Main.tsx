import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

import Splash from './Splash';

import Home from './MainTabs/Home';
import Projects from './MainTabs/Projects';
import Ratings from './MainTabs/Ratings';
import Suggestions from './MainTabs/Suggestions';

import BottomNavbar from './components/navigation/bottomnavbar';

import {SavedProjectsProvider} from './context/SavedProjectsContext';

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: undefined;
  ProjectDetails: {
    projectId: number;
  };
};

export type MainTabParamList = {
  Home: undefined;
  Projects: undefined;
  Ratings: undefined;
  Suggestions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const CustomBottomNavbar = (props: BottomTabBarProps) => {
  return <BottomNavbar {...props} />;
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={CustomBottomNavbar}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Ratings" component={Ratings} />
      <Tab.Screen name="Suggestions" component={Suggestions} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <SavedProjectsProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Splash"
            component={Splash}
          />

          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SavedProjectsProvider>
  );
};

export default Main;