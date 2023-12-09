import React from "react";
import FormItem from "./Form/FormItem";
import "./Sidebar.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function Form() {
  return (
    <div>
      {/* <Fab color="primary" id="floating-button" aria-label="add">
        <AddIcon />
      </Fab> */}
      <BrowserRouter>
                    <Routes>
                        <Route path='/addQuestions' element={<AddQuestions />}></Route>
                    </Routes>
                </BrowserRouter>
      <FormItem/>
    </div>
  );
}

export default Form;
