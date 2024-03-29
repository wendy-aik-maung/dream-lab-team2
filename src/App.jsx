import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginModalContextProvider } from "./contexts/LoginModalContext";
import { RegisterModalContextProvider } from "./contexts/RegisterModalContext";
import { UserDataContextProvider } from "./contexts/UserDataContext";
import { routes as userRoutes } from "./routes/UserRoutes";
import { routes as adminRoutes } from "./routes/AdminRoutes";
import { useAdminAuthContext } from "./contexts/AdminAuthContext";
import { getToken } from "./utils/getToken";
import { AuthorSelectContextProvider } from "./contexts/AuthorSelectContext";
import { CategorySelectContextProvider } from "./contexts/CategorySelectContext";
const queryClient = new QueryClient();

const App = () => {
  const UserRouting = useRoutes(userRoutes);
  const AdminRouting = useRoutes(adminRoutes);

  const { isAdmin } = useAdminAuthContext();
  console.log(getToken());
  return (
    <RegisterModalContextProvider>
      <LoginModalContextProvider>
        <UserDataContextProvider>
          <AuthorSelectContextProvider>
            <CategorySelectContextProvider>
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path="/*" element={UserRouting} />
                  <Route
                    path="/admin/*"
                    element={isAdmin ? AdminRouting : <Navigate to="/login" />}
                  />
                  <Route
                    path="/login"
                    element={
                      isAdmin ? <Navigate to="/admin" replace /> : AdminRouting
                    }
                  />
                </Routes>
              </QueryClientProvider>
            </CategorySelectContextProvider>
          </AuthorSelectContextProvider>
        </UserDataContextProvider>
      </LoginModalContextProvider>
    </RegisterModalContextProvider>
  );
};

export default App;
