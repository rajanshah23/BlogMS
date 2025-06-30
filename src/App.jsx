import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Editblog from "./pages/blog/Editblog";
import Singleblog from "./pages/blog/Singleblog";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/addblog" element={<AddBlog />} />
        <Route path="/blog/editblog" element={<Editblog/>}/>
        <Route path="/blog/id" element={<Singleblog/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
