import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black h-screen font-nunito overflow-scroll">
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
