export const addToWishlist = (productId) => {
    const wishlist = getWishlist();
    if (wishlist.includes(productId)) return;
    const newWishlist = wishlist.concat(productId);
    console.log("wishlist:", newWishlist, productId)
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
}

export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    const newWishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
}

export const getWishlist = () => {
    const wishlist = localStorage.getItem("wishlist");
    return wishlist ? JSON.parse(wishlist) : [];
}

export const isInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.includes(productId);
}

export const clearWishlist = () => {
    localStorage.removeItem("wishlist");
}
