import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, Link } from "react-router-dom";
import "./AddFormBtn.css";
function TotalForm() {
  const [totForm, settotForm] = useState(0);
  return (
    <>
      <div className="container text-center">
        {!totForm ? (
          <h1>Make New Form</h1>
        ) : (
          () => {
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>;
          }
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
