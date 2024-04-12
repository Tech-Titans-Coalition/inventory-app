import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  SingleItemPage,
  HomePage,
  InventoryPage,
  CartPage,
  MissingPage,
} from "../pages";
import { Button, Stack } from "@mui/material";
import { Header } from "./Header";
import { AppProvider } from "../contexts/AppContext";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  // create router and routes: /, /items, /items/:id, /cart
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<InventoryPage />} />
      <Route path="/items/:id" element={<SingleItemPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );

  return (
    <AppProvider>
      <Router>
        <Stack direction="column" style={{ width: "80%", margin: "0 auto" }}>
          <Header />
          {routes}
        </Stack>
      </Router>
    </AppProvider>
  );
};
