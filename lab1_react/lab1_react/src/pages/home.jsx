import Header from "../components/header";
import NavBar from "../components/navbar";
import '../assets/css/style.css'
import SliderHome from "../components/slider";
import Product from "../components/product";
import productphoto from '../assets/images/house.jpg';
import Footer from "../components/footer";
const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <SliderHome />
            <div class="main">
                <div class="wrapper">
                    <h3>Recently Added</h3>
                    <div class="clearfix">
                    <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                        <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                        <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                        <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                        <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                        <Product product={{
                            url: productphoto,
                            name: "House 1",
                            date: "12/12/2021",
                            location: "New York"
                        }} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home; 