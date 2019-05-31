import {HomeScreen} from "../../screens/homeScreens/HomeScreen";

{/*<Icon name="md-cart"*/}
{/*      size={30}*/}
{/*      onPress={() => navigation.navigate('Cart')}*/}
{/*      style={{color: 'white',marginRight:10}}*/}
{/*/>*/}
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
export const ShoppingCartIcon = (props) => (
    <View style={ styles.iconContainer}>
        <View style={{
            position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(255,255,0,0.7)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props. panierProduct.length}</Text>
        </View>
        <Icon onPress={() =>navigation.navigate('Cart')} name="md-cart" size={30} style={{color: 'white',marginRight:10}} />
    </View>
)
const mapStateToProps = state => {
    return {
        panierProduct: state.addToCart.panierProduct

    }
}


export default connect(mapStateToProps)(ShoppingCartIcon)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});