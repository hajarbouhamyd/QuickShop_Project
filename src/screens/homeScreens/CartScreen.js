import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View, Text} from 'react-native';
import CartProduct from '../../components/Body/CartProduct';
import Firebase from '../../firebase/Firebase'
import {connect} from "react-redux";
import mapStatetoProps from '../../store/stateToStore/MapStateToStoreCart'
import {HomeScreen} from "./HomeScreen";
import ProdHomeComponent from "../../components/ProdHomeComponent";
import counterCart from "../../store/reducers/reducerCounterPanier";
import RedButton from "../../components/FormComponents/RedButton";
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export class CartScreen extends Component<props> {

    state = {
        items : [],
        totalChange:false
    }

    constructor(props){
        super(props);
        total:0;
        indicateur: 0;
    }

    componentDidMount() {
        Firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                Firebase.database.ref('users/' + Firebase.auth.currentUser.uid + '/cartList/').on('value', snapshot => {
                    let data = snapshot.val();
                    let items = Object.values(data);
                    this.setState({items});
                })
            }
        })
    }

    calculeTotal(){
        var items;
        var tmp=0;
        items = this.state.items.map((item,index) => {
            tmp += item.prix * this.props.counter[index];

        })
        this.total= tmp;


    }
    updateComp(){
        if( this.indicateur !== this.total ){
            this.forceUpdate();
            this.indicateur = this.total;

        }
    }


    componentWillUpdate()
    {
        this.calculeTotal();
        this.updateComp();
    }

    render() {
        //this.calculeTotal();
        console.log(this.props);
        //this.updateComp();

        return (
            <View
                contentContainerStyle={styles.container}>
                {this.state.items.length > 0 ? (
                    <ScrollView>
                        <CartProduct items={this.state.items}
                                     panierProduct={this.props.panierProduct}
                                     counter={this.props.counter}
                                     dispatch={this.props.dispatch}

                        />

                        <View style={{flexDirection: 'row',fontFamily:'Montserrat-Regular', justifyContent:'space-between', height: 100, padding : 10}}>
                            <Text>montant total (HT) : </Text>
                            <Text>${this.total}</Text>
                        </View>
                        {/*action={() => } THE REDBUTTON'S ACTION */}
                        <RedButton value={"COMMANDER"} action={() => this.props.navigation.navigate('commande')}/>
                    </ScrollView>
                ) :  (
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
//
// const mapStateToProps = state => {
//     return {
//         counter: state.
//     }
// }
//
//
// export default connect(mapStateToProps)(CartScreen)
const mapStateToProps = state => {


    return {
        panierProduct: state.addToCart.panierProduct,
        counter: state.addToCart.counter,


    }
}
// const mapStateToProps = (state) => {
//     return state
// }
export default connect(mapStateToProps)(CartScreen)
 // const aa=connect(mapStatetoProps)(CartScreen)
 // aa