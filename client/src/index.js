import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from './routes/route';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <ChakraProvider >
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
    </ChakraProvider>
    
  </React.StrictMode>
);


