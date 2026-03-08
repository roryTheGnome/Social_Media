import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "@tanstack/react-router";
import {router} from "./router/router.tsx";
import {AuthProvider} from "./features/auth/AuthProvider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient= new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
          </QueryClientProvider>
      </AuthProvider>
  </StrictMode>
)
