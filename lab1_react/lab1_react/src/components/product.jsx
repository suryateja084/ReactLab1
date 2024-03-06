const Product = ({ product }) => {
    return (
        <div class="houses">
            <img src={product.url} />
            <span class="house-title">{product.name}</span><br />
            <span class="house-added">Added Date: {product.date}</span><br />
            <span class="house-location">Location: {product.location}</span><br />
            <a href={`book?product_name=${product.name}&date=${product.date}&loc=${product.location}`}>
                <button type="button" class="btn-book" >Book House</button>
            </a>
        </div>
    );
}

export default Product;