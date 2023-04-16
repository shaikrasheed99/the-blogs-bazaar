import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import "./App.css"
import Home from "./components/pages/home/Home"
import Navbar from "./components/layouts/navbar/Navbar"
import CreateBlog from "./components/pages/createBlog/CreateBlog"
import Blog from "./components/pages/blogs/Blog"
import NotFound from "./components/layouts/notFound/NotFound"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
