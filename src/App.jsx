import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import CreateBlog from "./components/createBlog/CreateBlog"
import Blog from "./components/blogs/Blog"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
