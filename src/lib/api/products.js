export const getProducts = async () => {
    
    const res = await fetch("https://fakestoreapi.com/products");
    if(!res.ok) throw new Error("Error fetching products");
    const products = await res.json();
    return products;
}

export const getProduct = async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!res.ok) throw new Error("Error fetching products");
    const product = await data.json();
    return product;
}

