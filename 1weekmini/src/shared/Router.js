import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage"
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/postpage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
