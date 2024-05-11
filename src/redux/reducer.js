const initialState ={
    products: [],
    cart:[],
    likes:[],
    error:null
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_PRODUCTS_SUCCESS":
            return{...state, products:action.payload};
        
        case "FETCH_PRODUCTS_FAILURE":
            return{...state, error:action.payload}

        case "ADD_TO_CART":
            const itemToAdd = state.products.find(product => product.id === action.payload)
            return{...state, cart:[...state.cart, itemToAdd]}

        case "TOGGLE_LIKE":
            const index = state.likes.indexOf(action.payload)
            if(index !== -1){
                return{...state, likes:state.likes.filter(id => id !== action.payload)}
            }else{
                return{...state, likes:[...state.likes, action.payload]}
            }
        default:
            return state
    }
}

export default reducer