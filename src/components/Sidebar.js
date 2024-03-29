import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import myImage from "./Logo.jpeg";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { bgcolor } from "@mui/system";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Template from "./Template/Template";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const bgColor = "#482d56";
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const navigate = useNavigate()
  const handleNav=()=>{
    console.log("called")
    window.open('http://192.168.56.1:3000/Form','_blank')
  }

  const handleNav2=()=>{
    console.log(' callled ');    window.open('http://192.168.56.1:3000/Template')
  }
  const baseURL = "https://18b8-182-48-224-214.ngrok-free.app";
  const header = {
    Authorization: "Bearer " + localStorage.getItem("token"),
    // "ngrok-skip-browser-warning": true
  };
  const [userName, setuserName] = useState("");
  const handleForm = async (e) => {
    const response = await axios
      .get(`${baseURL}/api/user`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "ngrok-skip-browser-warning": true,
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setuserName(response.data.data.name);
      })
      .catch(function (error) {
        console.log(error);
        // alert(error.msg);
      });
  };
  React.useEffect(() => {
    handleForm();
  }, []);



  const divStyle = {
    backgroundImage: `url(${myImage})`,
    backgroundSize: "cover", // or 'contain', depending on your needs
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // Additional styles can be added as needed
    width: "100%",
    height: "65px", // Adjust the height as needed
    // Other styles...
  };
  const handlelogout=()=>{
    localStorage.removeItem('token');
    props.logstate(false)
    navigate('/')
  }
  const drawer = (
    <div>
      <div style={divStyle}></div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {["Form", "Template"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link to={`/${text}`}>
            <ListItemButton >
              <ListItemIcon>
                {text == "Form" ? (
                  <InsertDriveFileIcon />
                ) : text == "Template" ? (
                  <AutoAwesomeMosaicIcon />
                ) : (
                  <RiLogoutCircleRLine onClick={handlelogout}/>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
            <Outlet />
          </ListItem>
        ))}
        <ListItem disablePadding>
             
            <ListItemButton onClick={handlelogout}> 
              <ListItemIcon>
                  <RiLogoutCircleRLine />
              </ListItemIcon>
              <ListItemText primary={'Sign Out'} />
            </ListItemButton>
            
            <Outlet />
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Welcome
            </Typography>
          </Toolbar>
          <div className="d-flex justify-content-start align-items-center me-3">
            <AccountCircleIcon sx={{ fontSize: 40 }} />
            <p className="mb-0">{userName}</p>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: bgcolor,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
