import React from 'react';
import { Routes, Route} from "react-router-dom";
import App from "../App";
import { RecipeCard } from "../components/showRecipe";
import { RECIPEDETAILS } from "../constant/constant.card";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path={RECIPEDETAILS} element={<RecipeCard />}/>
        </Routes>

    )
}