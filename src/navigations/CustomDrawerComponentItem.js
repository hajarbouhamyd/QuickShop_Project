import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {DrawerItems} from "react-navigation";
import React , {Component} from "react";
import {connect} from "react-redux";
import mapStatetoProps from "../store/stateToStore/MapStateToStoreProfile";
import {HomeScreen} from "../screens/homeScreens/HomeScreen";



export class CustomDrawerComponentItem extends Component <props>{

    constructor(props) {
        super(props);
    }

    render(){
       console.log("drawer");
       console.log(this.props);
       console.log(this.props);
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{height:150, alignItems: 'center', justifyContent: 'center'}}>
                    {/*<Image source={require('../../images/backgroundMenu.jpg')} style={{height:'100%', width: '100%'}} />*/}
                    <Image source={require('../../images/user.png')}
                           style={{ paddingLeft: 5, marginLeft:5 ,height:70, width: 70 ,borderRadius: 70/2}} />
                    {/*{*/}
                    {/*    this.props.profile.username !== ""  ? (*/}
                    {/*        <Text>{this.props.profile.username}</Text>*/}

                    {/*    ):(*/}
                    {/*{this.props.profile.username === undefined  ? <Text>hello user</Text> : <Text>hello {this.props.profile.username}</Text>}*/}

                    {/*    )})*/}
                    {/*}*/}
                </View>
            </SafeAreaView>
        )
    }


}

const mapStateToProps = state => {
    return {
        favoritesProduct: state.toggleFavorite.favoritesProduct,
        panierProduct: state.addToCart.panierProduct

    }
}
// const mapStateToProps = (state) => {
//     return state
// }

export default connect(mapStateToProps)(CustomDrawerComponentItem)