import React from "react";
import { Route, Routes } from "react-router-dom";
import ChooseRegister from "../pages/ChooseRegister";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<ChooseRegister />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
      <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      <Route path="/" element={<ChooseRegister />} />
    </Routes>
  );
};

export default AppRoutes;
