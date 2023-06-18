import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BlogDetalis from "./pages/blogDetalis";
import CreateBlog from "./private/createBlog";
import { block } from "million/react";
const LionBlock = block(function Lion() {
  
});
export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CreateBlog" element={<CreateBlog />} />
      <Route path="/blogs/:id" element={<BlogDetalis />} />
    </Routes>
    </>
  );
}
