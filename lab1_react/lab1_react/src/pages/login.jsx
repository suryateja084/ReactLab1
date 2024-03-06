import Footer from "../components/footer";
import Header from "../components/header";
import LoginComponent from "../components/login_component";
import NavBar from "../components/navbar";

const Login = () => {
    return (
        <>
            <Header />
            <div class="main">
                <div class="wrapper">
                    <LoginComponent />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;