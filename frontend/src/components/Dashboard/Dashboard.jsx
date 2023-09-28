import * as React from 'react';
import {Routes,Route, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import Group from '@mui/icons-material/Group';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SellIcon from '@mui/icons-material/Sell';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
// import { Leaderboard } from '@mui/icons-material';

import Table from './Table.jsx';

const drawerWidth = 240;


export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding onClick={()=> navigate("/")}>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={()=> navigate("/leaderboard")}>
            <ListItemButton>
              <ListItemIcon>
                <LeaderboardIcon/>
              </ListItemIcon>
              <ListItemText>Leaderboard</ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=> navigate("/orders")}>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon/>
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
            </ListItemButton>
        </ListItem>


        
        <ListItem disablePadding onClick={()=> navigate("/sales-report")}>
            <ListItemButton>
              <ListItemIcon>
                <QueryStatsIcon/>
              </ListItemIcon>
              <ListItemText>Sales Report</ListItemText>
            </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=> navigate("/customers")}>
            <ListItemButton>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" background="#f0f0f0">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Routes>
          <Route exact path="/" element={<Table/>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}