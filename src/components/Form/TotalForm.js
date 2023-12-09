import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, Link } from "react-router-dom";
import "./AddFormBtn.css";
function TotalForm() {
  const [totForm, settotForm] = useState(0);
  return (
    <>
    
      <div className="container ">
        {!totForm ? (
          <div class="card">
          <div class="card-header">No form present! Add Form</div>
        </div>
        ) : (
            <div class="card">
            <div class="card-header">Form title</div>
            <div class="card-body">
              <h5 class="card-title">Language</h5>
              <p class="card-text">
                Questions MCQ:  
              </p>
              <div className="d-flex justify-content-between">
              <a href="#" class="btn btn-primary">
                View Responses
              </a>
              <a href="#" class="btn btn-primary">
                Delete
              </a></div>
            </div>
          </div>
        )}
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
