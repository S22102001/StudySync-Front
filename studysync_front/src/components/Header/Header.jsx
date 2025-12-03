// src/components/NavBar/NavBar.jsx
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import {
  NavAppBar,
  BrandDesktop,
  BrandMobile,
  MobileNavBox,
  DesktopNavBox,
  NavButton,
  UserBox,
} from "./Header.style";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header({ onLogout }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Logout" && onLogout) {
      onLogout();
    }
  };

  return (
    <NavAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left icon + brand (desktop) */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <BrandDesktop
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            StudySync
          </BrandDesktop>

          {/* Mobile hamburger + mobile logo */}
          <MobileNavBox>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <BrandMobile
                    component="span"
                    variant="body1"
                    sx={{ flexGrow: 0 }}
                  >
                    {page}
                  </BrandMobile>
                </MenuItem>
              ))}
            </Menu>
          </MobileNavBox>

          {/* Brand text for mobile (center) */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <BrandMobile
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            StudySync
          </BrandMobile>

          {/* Desktop nav links */}
          <DesktopNavBox>
            {pages.map((page) => (
              <NavButton key={page} onClick={handleCloseNavMenu}>
                {page}
              </NavButton>
            ))}
          </DesktopNavBox>

          {/* User avatar + menu */}
          <UserBox>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
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
              onClose={() => handleCloseUserMenu()}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </UserBox>
        </Toolbar>
      </Container>
    </NavAppBar>
  );
}

export default Header;
