// HELPER FUNTIONS CONTAINS 2 MAIN FUNCTIONS -> fetchAllProducts() and fetchRandomProducts

// FUNCTION FETCHES LIST OF ALL PRODUCTS FROM URI 'https://dummyjson.com/products'
export async function fetchAllProducts() {
    const uri = 'https://dummyjson.com/products';
    const result = await fetch(uri);
    const data = await result.json();
    return data.products;
}

// FUNCTION SHUFFLES FETCHED PRODUCTS AND RETURNS LIST OF 10 RADNOM PRODUCTS
export async function fetchRandomProducts(products, count = 10) {
    const list = [...products];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]]
    };
    return list.slice(0, count);
}