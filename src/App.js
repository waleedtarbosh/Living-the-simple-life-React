import './App.css';
import Nav from "./components/Nav/NavContainer/index";
import Footer from "./components/Footer/FooterContainer/Footer";
import MainSidebarContainer from "./components/Grid/MainSidebarContainer/index";
function App() {
  return (
    <div className="App">
     <Nav/>
     <MainSidebarContainer/>
     <Footer/>
    </div>
  );
}

export default App;
