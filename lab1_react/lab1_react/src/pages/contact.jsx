import ContactForm from "../components/contactform";
import Header from "../components/header";
import NavBar from "../components/navbar";
import '../assets/css/style.css'
import Footer from "../components/footer";

const Contact = () => {
    return (
        <>
            <Header />
            <NavBar />
            <div class="main">
                <div class="wrapper">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;