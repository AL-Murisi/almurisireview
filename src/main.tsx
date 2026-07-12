import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import AddBranch from "./components/AddBranch.tsx";
import Employee from "./components/AddEmployee.tsx";
import AddGovernorate from "./components/AddGovernorate.tsx";

import Nav from "./components/nav.tsx";

createRoot(document.getElementById("root")!).render(
  
  <StrictMode >
    <BrowserRouter>
   <Nav /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/AddEmployee" element={<Employee />} />
        <Route path="/addemploy" element={<Employee />} />
        <Route path="/branches" element={<AddBranch />} />
        <Route path="/addbranch" element={<AddBranch />} />
        <Route path="/governorates" element={<AddGovernorate />} />
        <Route path="/addgovernorate" element={<AddGovernorate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
