import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, Link } from "react-router-dom";
import "../AddFormBtn.css";
function TotalForm() {
  const [totForm, settotForm] = useState(0);
  return (
    <div className="mt-6">
    
      <div className="container " >
        {!totForm ? (
          <div className="card">
          <div className="card-header">No form present! Add Form</div>
        </div>
        ) : (
            <div className="card">
            <div className="card-header">Form title</div>
            <div className="card-body">
              <h5 className="card-title">Language</h5>
              <p className="card-text">
                Questions MCQ:  
              </p>
              <div className="d-flex justify-content-between">
              <a href="#" className="btn btn-primary">
                View Responses
              </a>
              <a href="#" className="btn btn-primary">
                Delete
              </a></div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Link to={"/Form/FormItem"}>
          <Fab color="primary" id="floating-button" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
        <Outlet />
    </div>
  );
}

export default TotalForm;
