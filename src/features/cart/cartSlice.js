import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cart : [],
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem(state,action){
            // payload => new Item
            state.cart.push(action.payload);
        },
        delItem(state,action){
            // payload => id 
            state.cart = state.cart.filter( pizza => pizza.pizzaId !== action.payload);
        },
        increaseItemQuantity(state,action){
            // payload => id 
            const item = state.cart.find(item => item.pizzaId === action.payload);
            if(item){
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseItemQuantity(state,action){
            // payload => id 
            const item = state.cart.find(item => item.pizzaId === action.payload);
            if(item){
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
                if(item.quantity === 0 )
                    cartSlice.caseReducers.delItem(state,action);
            }
        },
        clearCart(state){
            state.cart = []
        },
    }
})

// Action creators are generated for each case reducer function
export const { addItem , delItem,increaseItemQuantity,decreaseItemQuantity,clearCart } = cartSlice.actions

export default cartSlice.reducer;

export const getCart = state => state.cart.cart;
export const getTotalCartQunatity = (state)=>
    state.cart.cart.reduce((sum , item) => sum + item.quantity , 0);
export const getTotalCartPrice = (state)=>
    state.cart.cart.reduce((sum , item) => sum + item.totalPrice , 0);

export const getCurrentPizzaById =(id) =>state => state.cart.cart.find(pizza => pizza.pizzaId === id)?.quantity?? 0 ;
