import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, Link } from "react-router-dom";
import './AddFormBtn.css'
function TotalForm() {
  const [totForm, settotForm] = useState(0);
  return (
    <>
    <div className="container text-center">
        {
            !totForm?(<h1>Make New Form</h1>):(()=>{
                
            })
        }
    </div>
      <div>
        <Link to="/FormItem">
          <Fab color="primary" id="floating-button" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        <Outlet />
      </div>
    </>
  );
}

export default TotalForm;
