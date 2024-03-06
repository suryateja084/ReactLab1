import * as React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Login from "../pages/login";
import Book from "../pages/book";

const RouterHandler = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterHandler;