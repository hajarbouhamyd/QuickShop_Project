// Components/Product.js

import React from 'react'
import {ScrollView, StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native'
import {connect} from "react-redux";
import {CartScreen} from "./CartScreen";


export class Cmd extends React.Component {

constructor(){
    super();
    this.state={
        tab:[],
        objet:{}
    }
}


    merge(){
        for(var itemPanier in this.props.panierProduct){
            for(var qte in this.props.counter){
                this.setState({ objet:itemPanier });

                const obj = Object.assign({}, this.state.objet, { qte: qte });
                this.setState({ objet:obj });
            // this.setState({object: itemPanier,qte})

            }
        }
        }
      /*  this.props.panierProduct
        }
    }


    find(indexP){
       /!* return(


                        ):(
                            <Text></Text>
                        )}
            return (

            ))
        }
    )*!/
        {data.map(i => {
            if (i.category === "Cat_name1"){
                return i.monuments.map(j => j.pois.map(k => k.name))

            }
        })}
    }
*/
    render() {
        merge();
        console.log(this.state);

        return (
            <ScrollView >
                <View>
                    <Text style={styles.confirmationStyle}>S'il vous plais vérifier votre commande </Text>
                    <View>
                        <View style={{
                            flexDirection: "row", borderBottomColor: 'black',
                            borderBottomWidth: 1, paddingBottom: 10, margin: 10
                        }}>
                            <Text style={styles.title_text}>Produit </Text>
                            <Text style={styles.title_text}>Quantité </Text>
                            <Text style={styles.title_text}>prix </Text>
                        </View>
                        {this.props.panierProduct.map((item, index) => {
                            return (
                        <View style={{flexDirection: "row"}}>
                            <Text style={styles.title_text}>{item.designation}</Text>
                            {/*{this.props.counter.map((itemQ, indexQ) => {
                                return(
                                        {if (i === index){

                                            <Text style={styles.title_text}>item</Text>)
                                    } else{
                                        return <Text></Text>
                                    }
                                }

                                ))})}
*/}

                            <Text style={styles.title_text}>{item.prix} $</Text>
                        </View>
                        )})
                        }
                        <View style={{
                            marginLeft: '40%', flexDirection: 'row',
                            marginTop: 20
                        }}>
                            <Text style={{fontSize: 22, color: 'black'}}>Prix Total : </Text>
                            <Text style={{fontSize: 22, color: 'black'}}>1290 $ </Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            marginTop: 40, backgroundColor: "#34495e", justifyContent: "center",
                            padding: 20, borderRadius: 15, margin: 15
                        }}>
                            <Text style={{color: 'white', textAlign: 'center', fontSize: 30}}>Confirmer et Payer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({

    confirmationStyle: {
        color: 'white',
        backgroundColor: '#838f9d',
        padding: 20,
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        fontSize: 20
    },

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    main_container: {
        height: 190,
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        paddingRight: 5,
        marginLeft: 30,
        marginTop: 20,
        justifyContent: "center",
        alignSelf: "center"
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
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
export default connect(mapStateToProps)(Cmd)