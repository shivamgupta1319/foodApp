import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes/route';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <ChakraProvider >

      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppRoutes/>
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>
);


