import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Navigation from'./component/Navigation';
import Carousal from'./component/Carousal';
import RecentlyAdded from './component/RecentlyAdded';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Header/>
    <Navigation/>
    <Carousal/>
    <RecentlyAdded/>
    <Footer/>
    </>

  );
}

export default App;
