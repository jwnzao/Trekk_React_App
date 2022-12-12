/* /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  NotificationsScreen,
  SignOutScreen,
} from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions:{
        title: "Profile",
        drawerIcon: ({tintColor}) => <Feather name='user' size={16} color={tintColor}/>
      }
    },
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions:{
        title: "Message",
        drawerIcon: ({tintColor}) => <Feather name='message-square' size={16} color={tintColor}/>
      },
    ActivityScreen: {
      screen: ActivityScreen,
      navigationOptions:{
        title: "Activity",
        drawerIcon: ({tintColor}) => <Feather name='activity' size={16} color={tintColor}/>
      },
      ListScreen: {
      screen: ListScreenScreen,
      navigationOptions:{
        title: "ListScreen",
        drawerIcon: ({tintColor}) => <Feather name='list' size={16} color={tintColor}/>
      },
    ReportScreen: {
      screen: ReportScreen,
      navigationOptions:{
        title: "Reports",
        drawerIcon: ({tintColor}) => <Feather name='bar-chart' size={16} color={tintColor}/>
      },
    NotificationsScreen: {
      screen: NotificationsScreen,
      navigationOptions:{
        title: "Notifications",
        drawerIcon: ({tintColor}) => <Feather name='bell' size={16} color={tintColor}/>
      },
    SignOutScreen: {
      screen: SignOutScreen,
      navigationOptions:{
        title: "SignOut",
        drawerIcon: ({tintColor}) => <Feather name='log-out' size={16} color={tintColor}/>
      },
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get("window").width*0.85,
    hideStatusBar: true,

    contentOptions: {
      activityBackgroundColor:"rgba(212,118,207,0.2)",
      activeTintColor:"#531158",
      itemContainerStyle:{
        marginTop: 10,
        marginHorizontal:8
      },
      itemStyle:{
        borderRadius:4
      }
    }
  },
);

export default createAppContainer(DrawerNavigator);
