"use client";

import Image from "next/image";
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Button from "@mui/material/Button";
import { Box, Autocomplete, TextField, useTheme, colors } from "@mui/material";

const Navbar = () => {
  return (
    <Box >
      <Box height={"64px"} className="mb-10" /> {/* Placeholder Box */}
      <AppBar position="fixed">
        <Toolbar className="flex flex-row justify-between">
          <Box className="flex flex-row">
            <Image
              alt="logo"
              height="44"
              width="44"
              className="mx-auto w-auto"
              src="/images/icon.png"
            />
          </Box>

          <p className="text-black text-3xl">DG Acessoria</p>

          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon sx={{ color: '#6AC48B', fontSize: '30px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
