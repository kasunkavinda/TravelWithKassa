import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
