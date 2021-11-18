import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
