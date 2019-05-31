import React, {Component} from "react";
import {ActivityIndicator, View} from "react-native";
import Firebase from "../../firebase/Firebase"
import styles from "../../styles/styles";

export default class ConnectionMiddleCommande extends Component<props> {
    componentWillMount(){
        let that = this;
        Firebase.auth.onAuthStateChanged(user => {
            that.props.navigation.navigate(user && user.emailVerified ? 'Commande' : 'ConnectionNavigator')
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator/>
            </View>
        )
    }
}

