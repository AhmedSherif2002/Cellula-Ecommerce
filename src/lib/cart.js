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

export const addToCart = (productId, title, imageUrl, quantity, price) => {
    const currentCart = getCart();
    console.log(productId, title, imageUrl, quantity, price)
    const exists = currentCart.find(product => product.id === productId);
    console.log("ss", exists)
    if(!exists){
        const newCart = currentCart.concat({ id: productId, quantity: quantity ? quantity : 1, price, title, imageUrl });
        localStorage.setItem("cart", JSON.stringify(newCart));
        return;
    }
    const newCart = currentCart.map(product => product.id === productId ? { ...product, quantity: quantity ? quantity : product.quantity + 1 } : product);
    localStorage.setItem("cart", JSON.stringify(newCart));
}

export const isInCart = (productId) => {
    const cart = getCart();
    const found = cart.find(product => productId === product.id);
    if(!found) return 0;
    return found.quantity;
}

export const clearCart = () => {
    localStorage.removeItem("cart");
}

export const addToCartHandle = (e, id, title, quantity, price, imageUrl) => {
    e.preventDefault();
    console.log("quantity:", quantity, "Price:", price);
    addToCart(id, title, imageUrl, quantity, price);
    alert(`Product id: ${id} was added to cart`);
}