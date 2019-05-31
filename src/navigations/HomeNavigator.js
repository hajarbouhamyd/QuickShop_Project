import React from 'react';
import {createAppContainer, createDrawerNavigator, createStackNavigator, DrawerItems} from 'react-navigation';

import HomeScreen from "../screens/homeScreens/HomeScreen";
import CartScreen from '../screens/homeScreens/CartScreen';
import {Icon} from 'native-base';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import OrdersScreen from "../screens/OrdersScreen";
import WishScreen from "../screens/WishScreen";
import SettingsScreen from "../screens/SettingsScreen";

import ShoppingCartIcon from '../components/Body/ShoppingCartIcon'
import {CustomDrawerComponentItem} from "./CustomDrawerComponentItem";

export const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:150, alignItems: 'center', justifyContent: 'center'}}>
            {/*<Image source={require('../../images/backgroundMenu.jpg')} style={{height:'100%', width: '100%'}} />*/}
            <Image source={require('../../images/user.png')}
                   style={{ paddingLeft: 5, marginLeft:5 ,height:70, width: 70 ,borderRadius: 70/2}} />
            {/*{*/}
            {/*    this.props.profile.username !== ""  ? (*/}
            {/*        <Text>{this.props.profile.username}</Text>*/}

            {/*    ):(*/}
            {/*{this.props.profile.username == undefined  ? <Text>hello user</Text> : <Text>hello {this.props.profile.username}</Text>}*/}

            {/*    )})*/}
            {/*}*/}
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
);

/*const makeUserPicture = (props) => {
    return (<View><CustomDrawerComponentItem props={props}/></View>)
}*/


 const AppDrawerNavigator = createDrawerNavigator({
        QuickShop: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: (
                    <Icon name="md-home" size={24}/>
                ),
            },
        },

        'My Orders':
            {
                screen: OrdersScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="list" size={24}/>
                    ),
                },
            },

        Cart:
            {
                screen: CartScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="md-cart" size={24}/>
                    ),
                },

            },


        'Wish List':
            {
                screen: WishScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="heart" size={24}/>
                    ),
                },

            },

        Settings:
            {
                screen: SettingsScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="md-settings" size={24}/>
                    ),
                },

            },

    },

    {contentComponent: CustomDrawerComponent}

);

const StackNavigator = createStackNavigator({
        Drawer: AppDrawerNavigator,
        navigationOptions: ({ navigation })=>({
            title :'QuickShop',
            color:'white'


        }),
        Cart: {
            screen: CartScreen,
            navigationOptions: ({ navigation })=>({
                headerStyle: {
                    backgroundColor:'red',
                    color:'white'

                }
            }),
        },




    // categoryItem:
    //     {
    //         screen: prodTest,
    //         navigationOptions: ({ navigation })=>({
    //             // title :'Cart',
    //             headerStyle: {
    //                 backgroundColor:'red',
    //             }
    //         }),
    //     }
    },
    {
        defaultNavigationOptions:({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerRight: (

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <ShoppingCartIcon/>
            </TouchableOpacity>
                ),
                headerLeft: (
                    <Icon
                        style={{paddingLeft: 10,color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30}
                    />),
                headerTitle: routeName,
                headerStyle: {
                    backgroundColor: 'red',
                    borderWidth:0,
                    color : 'white'

                },

            }
        }

    }


);
export default createAppContainer(StackNavigator);