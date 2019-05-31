import {Image, SafeAreaView, ScrollView, View,Text} from "react-native";
import {createDrawerNavigator, DrawerItems} from "react-navigation";
import HomeScreen from "../screens/homeScreens/HomeScreen";
import {Icon} from "native-base";
import OrdersScreen from "../screens/OrdersScreen";
import CartScreen from "../screens/homeScreens/CartScreen";
import WishScreen from "../screens/WishScreen";
import SettingsScreen from "../screens/SettingsScreen";
import mapStatetoProps from "../store/stateToStore/MapStateToStoreProfile";
import {connect} from "react-redux";
import React from "react";

export default connect(mapStatetoProps)(AppDrawerNavigator)