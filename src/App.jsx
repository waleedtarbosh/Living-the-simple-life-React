import { Routes, Route } from 'react-router';
import styles from './App.module.css';
import Nav from "./components/Nav/NavContainer/index";
import Footer from "./components/Footer/FooterContainer/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import RecentPosts from "./pages/RecentPosts";
import Post from "./pages/Post";

function App() {
  return (
    <div className={styles['App']}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/recent-posts" element={<RecentPosts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
