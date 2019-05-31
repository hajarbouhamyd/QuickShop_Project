import React from 'react';
import {ScrollView, StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {HomeScreen} from "../../screens/homeScreens/HomeScreen";


export class DetailsProducts extends React.Component {
    // constructor(props){
    //     super(props)
    //    this.state={
    //      data : this.props.navigation.state.params ,
    //    };
    // }
    _addToCart(item){
        const action = { type: "ADD_TO_CART", value: item}
        this.props.dispatch(action)

    }
    render() {
        const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
        const proName = this.props.navigation.getParam('proName', 'NO-NAME');
        const proPrice = this.props.navigation.getParam('proPrice','NO-PRICE');
        const overview = this.props.navigation.getParam('overview','NO-DESCRIPTION');
        const vote = this.props.navigation.getParam('vote','NO-VOTE');
        const proImage = this.props.navigation.getParam('proImage','NO-IMAGE');
        const item = this.props.navigation.getParam('prodItem','NO-IMAGE');

        return (

            <ScrollView style={styles.scrollview_container}>
                <Image
                    style={{height:250,width:'100%'}}
                    source={{uri: proImage}}
                />
                <Text style={styles.title_text}>{proName}</Text>
                <Text style={styles.description_text}>{overview}</Text>
                <Text style={styles.default_text}>price : {proPrice} $</Text>
                <Text style={styles.default_text}>Note : {vote} / 10</Text>
                <TouchableOpacity
                    onPress={() => this._addToCart(item)}
                    style={{backgroundColor:'red', width:150, alignItem: 'center',
                        justifyContent: 'center'}}
                >
                    <Text style={{
                        color: 'white',
                        paddingTop: 8,
                        marginBottom: 8,
                        fontFamily: 'Montserrat-Regular',
                        alignItem: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}>Ajouter au Panier</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },

    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
})


const mapStateToProps = state => {
    return {
        favoritesProduct: state.toggleFavorite.favoritesProduct,
        panierProduct: state.addToCart.panierProduct

    }
}
// const mapStateToProps = (state) => {
//     return state
// }

export default connect(mapStateToProps)(DetailsProducts)