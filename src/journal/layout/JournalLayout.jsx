import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavBar, SideBar } from '../components/';
const drawerWidth = 240;
export const JournalLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} />

      {/* Sidebar */}
      <SideBar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
