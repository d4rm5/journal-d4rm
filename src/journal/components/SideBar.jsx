import { AddOutlined, ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 240, open, handleDrawerClose }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        variant="temporary"
        open={open}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            color="primary"
            sx={{ ml: 3 }}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
        <Divider />

        <List onClick={handleDrawerClose}>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
        <Button
          onClick={onClickNewNote && handleDrawerClose}
          color="primary"
          sx={{
            padding: 2,
            display: { xs: 'flex', sm: 'none' },
            position: 'fixed',
            bottom: 10,
            left: 20,
          }}
        >
          <AddOutlined sx={{ fontSize: 30, mr: 1 }} />
          Crear nota
        </Button>
      </Drawer>

      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        variant="persistent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List onClick={handleDrawerClose}>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
