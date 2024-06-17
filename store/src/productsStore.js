//IMPORT PRICE ID FROM ENV FILE
require('dotenv').config();

const productsArray = [
    {
        id: process.env.PRICE_ID_REACT,
        title: "React JS Course",
        price: 100
    },
    {
        id: process.env.PRICE_ID_NODE,
        title: "Node JS Course",
        price: 54
    },
    {
        id: process.env.PRICE_ID_BACKEND,
        title: "Backend Development Course",
        price: 124
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };