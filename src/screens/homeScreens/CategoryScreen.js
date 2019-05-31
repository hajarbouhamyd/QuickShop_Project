// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
// import Firebase from "../firebase/Firebase";
// export default class CategoryScreen extends Component {
//
//     state = {
//         items : []
//     }
//
//     componentDidMount(){
//         Firebase.database.ref('produits/').on('value', snapshot => {
//             let data = snapshot.val();
//             let items = Object.values(data);
//             this.setState({ items });
//         })
//     }
//
//     render() {
//         return (
//             <Container>
//
//                 <Content contentContainerStyle={styles.container}>
//                     <Text>Category Screen</Text>
//                 </Content>
//             </Container>
//         );
//     }
// }
//
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     Brand: {
//         flex: 1,
//         fontSize: 19,
//         fontWeight: 'bold',
//         color:'white'
//     },
//     headerBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingLeft: 8,
//         backgroundColor:'red'
//     }
// });
// AppRegistry.registerComponent('CategoryScreen', ()=> CategoryScreen);

import React, {Component} from 'react';
import {ActivityIndicator, AppRegistry, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import Firebase from '../../firebase/Firebase'
import WishComponent from "../../components/WishComponent";
import CategorieItems from "../../components/Body/CategorieItems";
import {connect} from "react-redux";
import {CartScreen} from "./CartScreen";
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export class CategoryScreen extends Component {

    state = {
        items : []
    }

    componentWillMount(){
        Firebase.database.ref('produits/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        })
    }


    render() {

        const catName = this.props.navigation.getParam('catName', 'NO-NAME');
        console.log(catName);
        return (
            <View
                contentContainerStyle={styles.container}>
                {this.state.items.length > 0 ? (
                    <ScrollView>
                        <CategorieItems items={this.state.items} catName={catName} />
                    </ScrollView>
                ) : (
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                )}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },

    /*container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },*/
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
const mapStateToProps = state => {


    return {
        panierProduct: state.addToCart.panierProduct,
        counter: state.addToCart.counter,


    }
}
// const mapStateToProps = (state) => {
//     return state
// }
export default connect(mapStateToProps)(CategoryScreen)