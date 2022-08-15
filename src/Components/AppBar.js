import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingBottom: theme.spacing(0),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 30,
  },
}));

export default function ProminentAppBar() {
  return (
    <>
      <Box>
        <AppBar position="static">
          <StyledToolbar>
            <IconButton
              aria-label="open drawer"
              style={{ margin: "auto", padding: "auto", color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ flexGrow: 5, padding: "5" }}
              variant="h5"
              noWrap
              component="div"
            >
              Music App
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              style={{ color: "white" }}
              aria-label="display more actions"
            >
              <MoreIcon />
            </IconButton>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
}