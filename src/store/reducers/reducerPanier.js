// import Firebase from "../../firebase/Firebase";
// let data;
// let elements;
// Firebase.database.ref('users/' + Firebase.auth.currentUser.uid + '/wishList/').on('value', snapshot => {
//      data = snapshot.val();
//     elements = Object.values(data);
//
// })

const initialState = {
    panierProduct: [],
    counter: [],
    total: 0
}

function addToCart(state = initialState, action) {
    let nextState;
    const cartProductIndex = state.panierProduct.findIndex(item => item.id === action.value.id);
    switch (action.type) {
        case 'ADD_TO_CART':


            if (cartProductIndex === -1) {
                state.total = state.total + action.value.prix ;
                nextState = {
                    ...state,
                    panierProduct: [...state.panierProduct, action.value],
                    counter: [...state.counter,1]
                }
            }
            return nextState || state;

        case 'REMOVE_FROM_CART' :
            state.total = state.total - action.value.prix * state.counter[cartProductIndex] ;
            return {
                    ...state,
                    panierProduct: state.panierProduct.filter( (item, index) => index !== cartProductIndex),
                    counter: state.counter.filter( (element, index) => index !== cartProductIndex)
                }
        case 'INCREASE_COUNTER':
            state.total = state.total + action.value.prix ;
            state.counter[cartProductIndex] = state.counter[cartProductIndex] + 1
            return {...state}
        case 'DECREASE_COUNTER':
            state.total = state.total - action.value.prix ;
            state.counter[cartProductIndex] = state.counter[cartProductIndex] - 1
            return { ...state}
            // return nextState || state;

        default:
            return state
    }
}

export default addToCart