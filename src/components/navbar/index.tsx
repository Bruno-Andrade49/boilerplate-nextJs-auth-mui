import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { DrawerContext } from 'context/drawerContext';

const Navbar: React.FC = () => {

  const { setIsDrawerOpen, isDrawerOpen } = useContext(DrawerContext);


  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Minha Aplicação</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
