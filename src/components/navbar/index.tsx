"use Client"
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { DrawerContext } from 'context/drawerContext';
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar: React.FC = () => {
  const { setIsDrawerOpen, isDrawerOpen } = useContext(DrawerContext);
  const router = useRouter();

  async function handleLogout() {

    router.push("/");
    // Remova os cookies relacionados à autenticação ou quaisquer outros que deseja excluir
    Cookies.remove("auth-token");
    // Navegue para a página "/"
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          edge="start"
          color="inherit"
          aria-label="logo"
        >
          <MenuIcon  fontSize='large' />
        </IconButton>
        <Image src={Logo} width={160} height={80} alt="logo" priority />
        <LogoutIcon fontSize='large' onClick={handleLogout} />
        {/* Ícone de logout com evento de clique */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
