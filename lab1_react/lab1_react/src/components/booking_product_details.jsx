import productphoto from '../assets/images/house.jpg';

const BookingHomeDetails = (product) => {
    // get the product_name from url
    const url_string = window.location.href;
    const url = new URL(url_string);
    const product_name = url.searchParams.get("product_name");
    const location = url.searchParams.get("loc");
    const date = url.searchParams.get("date");
    
    return (
        <div class="book-house">
            <h3>{product_name}</h3>

            <img src={productphoto} />
            <span class="house-added">{date}</span><br />
            <span class="house-location">{location}</span><br />
            <span class="house-price">RMS 343</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore corrupti id dignissimos iusto, porro vero quae, fuga autem rem in, nam culpa eveniet ducimus assumenda omnis beatae qui non!
            </p>
        </div>
    )
}

export default BookingHomeDetails;