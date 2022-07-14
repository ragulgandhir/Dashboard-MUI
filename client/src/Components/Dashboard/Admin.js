import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InventoryIcon from "@mui/icons-material/Inventory";
import BuildIcon from "@mui/icons-material/Build";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import KeyboardReturnSharpIcon from "@mui/icons-material/KeyboardReturnSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import CardContent from '../Cards/Card'


const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = styled((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  list: { width: 250 },
  nested: { paddingLeft: theme.spacing(4) },
}));

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer()}
            >
              <div className={classes.list}>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <InventoryIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Stocks" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <BuildIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Raw Material" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ReceiptSharpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Bills" />
                  </ListItem>
                </List>
                <ListItem button>
                  <ListItemIcon>
                    <InventorySharpIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Invertory" />
                </ListItem>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <MonetizationOnSharpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Sales List" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartSharpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Purchase List" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardReturnSharpIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Return" />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ExitToAppIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Admin Panel
          </Typography>
          <Box sx={{ pl: 130 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="profile"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Link to="/Table">Table Data</Link>
      </nav>
      <CardContent />
    </div>
  );
};

export default Dashboard;
