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

function Form() {
  return (
    <div>
      <Link rel="stylesheet" to="/FormItem" />
      <Fab color="primary" id="floating-button" aria-label="add">
        <AddIcon />
      </Fab>
      <BrowserRouter>
                    <Routes>
                        <Route path='/FormItem' element={<FormItem />}></Route>
                    </Routes>
                </BrowserRouter>
      <FormItem/>
    </div>
  );
}

export default Form;
