import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import bottomTabNavigator from './BottomTabNavigator/bottomTabNavigator';
import StoryScreen from '../screens/StoryScreen';
import ChatScreen from '../screens/ChatScreen';
import InboxScreen from '../screens/InboxScreen';
import {useRoute} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';

const RootStack = createStackNavigator ();

const Router = () => {
  const route = useRoute ();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={'Feed'}
        component={bottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="InboxScreen"
        component={InboxScreen}
        options={({route}) => ({
          title: route.params.name,
          headerTitleAlign: 'center',
        })}
      />
      <RootStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerTitleAlign: 'center',
        }}
      />

    </RootStack.Navigator>
  );
};

export default Router;
