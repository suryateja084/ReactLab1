import Header from "../components/header";
import NavBar from "../components/navbar";
import '../assets/css/style.css'
import AboutUsRenderer from "../components/about_us";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Header />
            <NavBar />
            <AboutUsRenderer />
            <Footer />
        </>
    );
}

export default About;