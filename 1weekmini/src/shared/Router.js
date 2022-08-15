import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage"
import PostPage from "../pages/PostPage";
import DetailPage from "../pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/detailpage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
