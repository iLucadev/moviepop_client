import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/Home";
import Content from "./views/Content";
import ContentDetail from "./views/ContentDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-t from-black to-slate-900 h-screen font-nunito overflow-scroll">
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/content/:id" element={<ContentDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
