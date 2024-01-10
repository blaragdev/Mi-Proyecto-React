import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Layout from "./layouts/Layout";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Inicio />} index></Route>
          <Route element={<Posts />} path="/posts"></Route>
          <Route element={<PostDetail />} path="/postdetail/:id"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
