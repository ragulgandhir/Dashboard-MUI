import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Navbar } from "react-bootstrap";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Logout"];

const useStyles = styled((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2) },
  title: { flexGrow: 1 },
  list: { width: 300 },
  nested: { paddingLeft: theme.spacing(4) },
}));

function NavbarItems() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <Navbar>
        <Container>
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
                          <DashboardIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>
                          <nav>
                            <Link to="/Dashboard">Dashboard</Link>
                          </nav>
                        </ListItemText>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ProductionQuantityLimitsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>
                          <nav>
                            <Link to="/Product">Manage Product</Link>
                          </nav>
                        </ListItemText>
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ReceiptSharpIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>
                          <nav>
                            <Link to="/Order">Manage Orders</Link>
                          </nav>
                        </ListItemText>
                      </ListItem>
                    </List>
                    <ListItem button>
                      <ListItemIcon>
                        <ContactMailOutlinedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        <nav>
                          <Link to="/User">Manage Users</Link>
                        </nav>
                      </ListItemText>
                    </ListItem>
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
                        <ListItemText>
                          <nav>
                            <Link to="/">Logout</Link>
                          </nav>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </IconButton>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="https://d3fgegizptfhv.cloudfront.net/4d7a5efa7e9ff0e0fcb09507b644d9c4/images/client_logo_thumb.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                ADMIN PANEL
              </Navbar.Brand>
              <Box sx={{ pl: 100 }}>
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
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarItems;
