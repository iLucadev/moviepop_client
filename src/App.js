import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/Home";

function App() {
  const contentState = useSelector((state) => state.content);
  console.log(contentState);

  return (
    <BrowserRouter>
      <div className=" bg-gradient-to-t from-slate-900 to-sky-900 h-screen text-white">
        <div className="container mx-auto pt-8 h-full">
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Layout>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
