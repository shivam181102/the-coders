import React from "react";
import FormItem from "./Form/FormItem";
import TotalForm from "./Form/TotalForm";
import "./Sidebar.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, useNavigate, Route, Routes } from "react-router-dom";


function Form() {
  
  return (
    <div>
      <Routes>
        <Route index element={<TotalForm />} />
              <Route exact path="/Sidebar/Form/TotalForm" element={<TotalForm />} />
              <Route exact path="/Sidebar/Form/FormItem" element={<FormItem />} />        
              </Routes>
    </div>
  );
}

export default Form;
