function Product({ name, price,selectProduct }) {
    function pokazProdukt() {
        console.log(`Nazwa: ${name}`);
        console.log(`Cena: ${price}`);
        selectProduct(name)
    }

    return (
        <button onClick={pokazProdukt}>
            Nacisnij
        </button>
    );
}

export default Product;