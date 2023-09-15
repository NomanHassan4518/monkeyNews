import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewsItem from "./Components/NewsItem";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  let tops = {
    type:"top-headlines",
    title:"Top-Headlines",
    country:"us"
  }
  let allnews = { 
    type:"everything",
    title:"All News",
    country:""
  }

  return (
    <div className=''>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/allnews" element={<NewsItem type={allnews} title="All News"/>}></Route>
    <Route path="/topnews" element={<NewsItem top={tops} title="Top-Headlines" />}></Route>
    <Route path="/business" element={<NewsItem categories="business" title="Business News" />}></Route>
    <Route path="/general" element={<NewsItem categories="general" title="General News" />}></Route>
    <Route path="/health" element={<NewsItem categories="health" title="Health News" />}></Route>
    <Route path="/science" element={<NewsItem categories="science" title="Science News" />}></Route>
    <Route path="/sports" element={<NewsItem categories="sports" title="Sports News" />}></Route>
    <Route path="/technology" element={<NewsItem categories="technology" title="Technology News" />}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;
