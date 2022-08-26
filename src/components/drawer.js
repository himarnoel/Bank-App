import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

///-========icons======
import logo from "../logo2.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import Dashboard from './../pages/Dasboard';
import Transaction from './../pages/Transaction';
///-========icons======

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
const [val, setval] = useState(0);
const [name, setname] = useState("Dashboard");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const changer=(name, index)=>{
setname(name);
setval(index);
handleDrawerToggle()  
}

  const drawer = (
    <div className="draw h-100">
        <div className="d-flex justify-content-center mt-3 pt-1 align-items-center flex-column">
             <img  className="img-fluid" src={logo}/>
             <Typography paragraph> 
             ImaBank
             </Typography>
        </div>

      <Toolbar />
      <Divider />
      <List>

      {[{name:'Dashboard', icon:   <DashboardIcon sx={{ color: "#fff" }}/>},
       {name:'Transactions', icon:    <ShowChartIcon sx={{ color: "#fff" }}/>,}, 
      {name:'Withdraw', icon:<RequestQuoteIcon sx={{ color: "#fff" }}/>},
      {name:'Transfer', icon:  <PointOfSaleIcon sx={{ color: "#fff" }} />},
      {name:'Loan', icon:      <MailIcon sx={{ color: "#fff" }}/>}
    ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className={index===val?"btni ms-1":"ms-1 cur"} onClick={()=>changer(text.name,index)}>
              <ListItemIcon>
          {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
         
        
      </List>
     
     
      <br/>
      <br/>
      <br />
     <br />
      <List>
        <Divider/>
          <ListItem  disablePadding>
           
            <ListItemButton>
              <ListItemIcon>
              <AccountCircleIcon sx={{ color: "#fff" }}/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding className="pb-2">
           <ListItemButton>
             <ListItemIcon>
            <LogoutIcon  sx={{ color: "#fff" }}/>
             </ListItemIcon>
             <ListItemText primary="Logout" />
           </ListItemButton>
         </ListItem>
         <br />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
  
      <CssBaseline />
      <AppBar
      className="draw" 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow:0
        }}
      >
        <Toolbar>
          <IconButton
         className='text-light'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div">
          {name}
          </Typography>
        </Toolbar>
    
    
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        className="draw"
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
             
      <Typography paragraph>
         {val==0? <Dashboard/>:val==1?<Transaction/>:<Divider/>}
        </Typography>
      </Box>
 
        
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
