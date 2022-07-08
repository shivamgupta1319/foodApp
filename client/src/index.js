import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes/route';
import ScrollToTop from './routes/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <ChakraProvider >

      <BrowserRouter>
        <ScrollToTop>
          <AppRoutes/>
        </ScrollToTop>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>
);


