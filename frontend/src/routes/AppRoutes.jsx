import React from "react";
import { Route, Routes } from "react-router-dom";
import ChooseRegister from "../pages/auth/ChooseRegister";
import UserRegister from "../pages/auth/UserRegister";
import UserLogin from "../pages/auth/UserLogin";
import FoodPartnerRegister from "../pages/auth/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/auth/FoodPartnerLogin";
import Home from "../pages/general/Home"
import Saved from "../pages/general/Saved"
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<ChooseRegister />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
      <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      <Route path="/" element={<Home />} />
  <Route path="/saved" element={<Saved />} />
     <Route path="/create-food" element={<CreateFood />} />
         <Route path="/food-partner/:id" element={<Profile />} />

    </Routes>
  );
};

export default AppRoutes;
