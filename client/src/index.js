import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RecipeCard } from './components/showRecipe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ChakraProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/details" element={<RecipeCard />}/>
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
    
  </React.StrictMode>
);


