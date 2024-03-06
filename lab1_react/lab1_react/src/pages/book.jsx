import Header from "../components/header";
import NavBar from "../components/navbar";
import '../assets/css/style.css'
import Footer from "../components/footer";
import BookingHomeDetails from "../components/booking_product_details";
import BookingComponentForm from "../components/booking_component";

const Book = (product) => {
    return (
        <>
            <Header />
            <NavBar />
            <div class="main">
            <div class="wrapper">
            <BookingHomeDetails product={product} />
            
            <BookingComponentForm />
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Book;