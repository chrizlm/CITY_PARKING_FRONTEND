import * as React from "react";
import { Link } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LoginDialog from "../LoginDialog";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from '@mui/material';

export default function SideNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
          onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon  />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              
              {SideMenu.map((menuitem, index) => {
                return (
                <div key={index}>
                  <MenuItem onClick={handleClose}>
                    <li key={index}>
                      <Link to={menuitem.path} >
                        {menuitem.icon}
                        {menuitem.title}
                      </Link>
                    </li>
                  </MenuItem>
                  </div>
                );
              })}
              <Divider />
             <div><MenuItem onClick={handleClose}>Profile</MenuItem></div>
             <div><MenuItem onClick={handleClose}>My account</MenuItem></div>
             <div><MenuItem onClick={handleClose}>Logout</MenuItem></div>
            </Menu>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Parking App
          </Typography>
          <LoginDialog />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
