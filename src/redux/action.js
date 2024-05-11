import products from '../assets/products'
export const fetchProducts = () => {
    return async dispatch => {
      try {
        // Simulate async behavior (optional)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
        console.log(payload)
      } catch (error) {
        dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
      }
    };
  };
  
  export const addToCart = productId => {
    return (dispatch, getState) => {
      dispatch({ type: "ADD_TO_CART", payload: productId });
      // Log updated cart state
      console.log(getState().cart);
    };
  };

export const toggleLike = productId =>({
    type:"TOGGLE_LIKE",
    payload:productId,
})