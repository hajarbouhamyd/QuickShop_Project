import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Connection from "../screens/compteScreens/Connection";
import Facture from '../screens/compteScreens/Facture';
import ConnectionMiddleCommande from "../screens/compteScreens/ConnectionMiddleCommande";
import EditProfile from "../screens/compteScreens/EditProfile";
import CommandeScreen from "../screens/homeScreens/CommandeScreen";

const CommandeSwitchNavigator =  createSwitchNavigator({
        AuthLoading : ConnectionMiddleCommande,
        Commande : CommandeScreen,
        ConnectionNavigator : Connection
    },
    {
        initialRouteName : 'AuthLoading'
    }
);

const CommandeSwitchNavigatorContainer = createAppContainer(CommandeSwitchNavigator);

export default CommandeSwitchNavigatorContainer;
