const NavBar = () => {
    return (
        <nav className="menu">
            <div className="wrapper">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="about"><li>About Us</li></a>
                    <a href="#"><li>Houses</li></a>
                    <a href="contact"><li>Contact Us</li></a>
                    <a href="login"><li>Log In</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;