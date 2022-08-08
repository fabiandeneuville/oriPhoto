export const state = () => ({
    cart : [],
    cartTotalQuantity : 0,
    cartTotalPrice : 0,
    orderId : ''
})

export const mutations = {

    addToCart(state, product){
        let productFound = state.cart.find((p) => p.id === product.id && p.selected === product.selected);
        state.cartTotalQuantity += product.quantity
        state.cartTotalPrice += (product.quantity * product.price)
        if(productFound != undefined){
            productFound.quantity += product.quantity;
        } else {
            state.cart.push(product)
        }
    },

    clearCart(state){
        state.cart = [];
        state.cartTotalPrice = 0;
        state.cartTotalQuantity = 0;
    },

    removeFromCart(state, product){
        state.cart = state.cart.filter((p) => p.id !== product.id || p.selected !== product.selected);
        state.cartTotalQuantity -= product.quantity;
        state.cartTotalPrice -= product.quantity * product.price
    },

    updateProductQuantity(state, product){
        let productFound = state.cart.find((p) => p.id === product.id && p.selected === product.selected);
        state.cartTotalQuantity -= productFound.quantity;
        state.cartTotalPrice -= productFound.quantity * productFound.price;

        productFound.quantity = product.quantity;

        state.cartTotalQuantity += product.quantity;
        state.cartTotalPrice += product.quantity * product.price;
    },
    
    setOrderId(state, id){
        state.orderId = id;
    }
}