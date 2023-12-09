import React from "react";
import FormItem from "./Form/FormItem";
import "./Sidebar.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  BrowserRouter,
  Route,
  Routes,Link
} from "react-router-dom";
import TotalForm from "./Form/TotalForm";

function Form() {
  return (
    <div>
      
      <BrowserRouter>
                    <Routes>
                        <Route exact path='/TotalForm' element={<TotalForm />}/>
                        <Route index path='/' element={<TotalForm />}/>
                        <Route exact path='/FormItem' element={<FormItem />}/>
                    </Routes>
                </BrowserRouter>
     
    </div>
  );
}

export default Form;
