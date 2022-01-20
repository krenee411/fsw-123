import Home from './Pages/HomePage';
import Search from './Pages/SearchPage';
import About from './Pages/AboutPage';
import Blog from './Pages/BlogPage';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <link rel="stylesheet" href="http://use.fontawesome.com/releases/v5.15.3/css/all.css"></link>
      <header>
        <ul id="NavBar">
          <li class='link'><Link to="/">Home <i class="fas fa-home"></i> </Link></li>
          <li class='link'><Link to="/Search">| Search <i class="fas fa-search"></i></Link></li>
          <li class='link'><Link to="/Blog">| Blog <i class="fas fa-blog"></i></Link></li>
          <li class='link'><Link to="/About">| About <i class="far fa-question-circle"></i> </Link></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;






/*
1.Use the README.md file in your project to document your app. (10 pts)???
2.Use either an online API or just array of objects for in-memory storage. (10 pts)----spotify api check
3.Use state data (useState hook). (10 pts)------check
4.Use React Router and have at least 3 pages. (20 pts)---check
5.Create at least 7 components. (20 pts)------check
6.Allow for at least two CRUD (Create, Read, Update, Delete) operations. (20 pts)---working on it?


*/