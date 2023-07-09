import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AccountCircle } from '@mui/icons-material';
import logo from "./images/Logofornavbar.png";
import { FormControlLabel, Switch } from '@mui/material';
import { useEffect, useState } from 'react';

const pages = ['Report a Lost Item', 'Report a Found Item', 'Gallery'];

function NavBar({ mode, toggleMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [switchLabel, setSwitchLabel] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setSwitchLabel(mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }, [mode])


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ height: "5rem", width: "5rem", display: { xs: 'none', md: 'flex' } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <FormControlLabel control={
            <Switch
              size="small"
              checked={mode === "dark"}
              onChange={toggleMode} />
          } label={switchLabel} />


          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <AccountCircle style={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;