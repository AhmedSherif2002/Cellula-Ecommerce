export const updateCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

export const removeFromCart = (productId) => {
    const currentCart = getCart();
    newCart = currentCart.filter(product => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
}

export const addToCart = (productId, quantity) => {
    const currentCart = getCart();
    const exists = currentCart.find(product => product.id === productId);
    if(!exists){
        const newCart = currentCart.concat({ id: productId, quantity: quantity ? quantity : 1 });
        localStorage.setItem("cart", JSON.stringify(newCart));
        return;
    }
    const newCart = currentCart.map(product => product.id === productId ? { ...product, quantity: quantity ? quantity : quantity + 1 } : product);
    localStorage.setItem("cart", JSON.stringify(newCart));
}

export const clearCart = () => {
    localStorage.removeItem("cart");
}
