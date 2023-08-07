import React, { useContext, useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CustomThemeContext } from "context/themeContext";
import { DrawerContext } from "context/drawerContext";
import Image from "next/image";
import Logo from "../../assets/logo.png";


const Sidebar: React.FC = () => {

  const { mudarTema } = useContext(CustomThemeContext);
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(!isDrawerOpen)}>
        <Image src={Logo} width={160} height={80} alt="logo" priority/>

        <Box p={"20px 0"} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
          <List>
            <ListItem button onClick={handleProfileClick}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
              {profileOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </ListItem>
            <Collapse in={profileOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    {/* Icon for Subitem 1 */}
                  </ListItemIcon>
                  <ListItemText primary="Subitem 1" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    {/* Icon for Subitem 2 */}
                  </ListItemIcon>
                  <ListItemText primary="Subitem 2" />
                </ListItem>
                {/* Add more subitems as needed */}
              </List>
            </Collapse>

            <ListItem button onClick={handleSettingsClick}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
              {settingsOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </ListItem>
            <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    {/* Icon for Subitem 1 */}
                  </ListItemIcon>
                  <ListItemText primary="Subitem 1" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    {/* Icon for Subitem 2 */}
                  </ListItemIcon>
                  <ListItemText primary="Subitem 2" />
                </ListItem>
                {/* Add more subitems as needed */}
              </List>
            </Collapse>
          </List>
          <Button onClick={() => mudarTema()}>MUDAR THEME</Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
