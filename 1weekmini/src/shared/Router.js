import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage"
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage"
import PostPage from "../pages/PostPage";
// import DetailPage from "../pages/DetailPage";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/mypage/:username" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
