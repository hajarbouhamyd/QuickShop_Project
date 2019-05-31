// import {connect} from "react-redux";
// import {initialiseCounter} from "../actions/initialiseCounter";
//
// const initialState = {
//     counter: []
// };
// const counterCart = (state = initialState, action) => {
//
//     switch (action.type) {
//         case 'INCREASE_COUNTER':
//             return { counter: state.counter + 1 }
//         case 'DECREASE_COUNTER':
//             return { counter: state.counter - 1 }
//     }
//     return state
// }
//
// export counterCart
//
// const mapStateToProps = state => {
//     return {
//         panierProduct: state.addToCart.panierProduct,
//         // counter: state.counterCart.counter
//
//     }
// }
//
// export default connect(mapStateToProps)(initialiseCounter)