import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./features/content/contentSlice";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/Home";
import Content from "./views/Content";
import ContentDetail from "./views/ContentDetail";
import SignIn from "./views/SignIn";
import { CookiesProvider, useCookies } from "react-cookie";
import {
  askForAuth,
  authSelector,
  getUserFavoritesFunction,
} from "./features/auth/authSlice";
import RequireAuth from "./utils/RequireAuth";

function App() {
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies(["jwt"]);

  const { token, user, loading } = useSelector(authSelector);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  useEffect(() => {
    if (token) setCookie("jwt", token);
  }, [token]);

  useEffect(() => {
    const jwtInCookie = {
      headers: {
        jwt: cookies.jwt,
      },
    };

    if (jwtInCookie.headers.jwt != undefined) {
      console.log(jwtInCookie);
      dispatch(askForAuth(jwtInCookie));
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getUserFavoritesFunction(user.user_id));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <CookiesProvider>
        <div className="bg-gradient-to-t from-black to-slate-900 h-screen font-nunito overflow-auto">
          <Layout>
            <Header />
            <Routes>
              {/* Public route */}
              <Route path="/sign-in" element={<SignIn />} />
              {/* Private routes */}
              <Route element={<RequireAuth />}>
                <Route path="/home" element={<Home />} />
                <Route path="/content" element={<Content />} />
                <Route path="/content/:id" element={<ContentDetail />} />
              </Route>
              {/* Catch all */}
              <Route path="*" element={<Navigate to="/sign-in" replace />} />
            </Routes>
            <Footer />
          </Layout>
        </div>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
