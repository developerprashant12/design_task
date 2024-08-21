import React, { useState } from 'react';
import {
    Box, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Avatar, Button, InputBase, Divider, Menu, MenuItem, useMediaQuery, useTheme, Drawer, Typography, AppBar,
    Toolbar
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TodayIcon from '@mui/icons-material/Today';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardData from '../pages/DashboardData';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedBackContent from '../pages/FeedBackContent';
import TableData from '../pages/TableData';



const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);  
    const [anchorEl, setAnchorEl] = useState(null);
    const [iconopen, setIconOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIconOpen(true)
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setIconOpen(false)
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const renderMenuItems = () => {
        switch (selectedIndex) {
            case 0:
                return (

                    <DashboardData />

                );
            case 1:
                return (
                    <TableData />
                );  
            case 2:
                return (
                    <DashboardData />
                );
            case 3:
                return (
                    <TableData />
                );
            case 4:
                return (
                    <DashboardData />
                );
            case 5:
                return (
                    <TableData />
                );
            case 6:
                return (
                    <DashboardData />
                );
            case 7:
                return (
                    <TableData />
                );
            default:
                return null;
        }
    };

    return (


        <Box sx={{ display: 'flex' }}>
            {!isMobile && (<Box sx={{ width: 70, height: '95vh', bgcolor: '#fff', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 2 }}>
                <Avatar sx={{ bgcolor: '#03a9f4', width: 48, height: 48, marginBottom: 2 }}>ZH</Avatar>
                <Divider sx={{ width: '100%', marginBottom: 2 }} />

                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={() => handleListItemClick(0)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <DashboardIcon sx={{ color: selectedIndex === 0 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={() => handleListItemClick(1)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <BusinessIcon sx={{ color: selectedIndex === 1 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={() => handleListItemClick(2)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <GroupIcon sx={{ color: selectedIndex === 2 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={() => handleListItemClick(3)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <WorkOutlineIcon sx={{ color: selectedIndex === 3 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={() => handleListItemClick(4)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <ReceiptIcon sx={{ color: selectedIndex === 4 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 5}
                        onClick={() => handleListItemClick(5)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <MonetizationOnIcon sx={{ color: selectedIndex === 5 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 6}
                        onClick={() => handleListItemClick(6)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <TodayIcon sx={{ color: selectedIndex === 6 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 7}
                        onClick={() => handleListItemClick(7)}
                        sx={{ justifyContent: 'center', padding: '10px 0' }}
                    >
                        <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
                            <AssessmentIcon sx={{ color: selectedIndex === 7 ? '#03a9f4' : '#757575' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </List>

            </Box>
            )}

            {!isMobile && <Box sx={{ width: 250, height: '95vh', bgcolor: '#fff', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'start', paddingTop: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f0f0f0', borderRadius: 1, padding: '4px 8px', marginLeft: 2, marginRight: 4, backgroundColor: "none", border: "1px solid #b9b1b1", margin: 1, marginBottom: 2.2 }}>
                    <SearchIcon fontSize="small" sx={{ color: '#757575' }} />
                    <InputBase placeholder="Search" sx={{ ml: 1, fontSize: 14, fontWeight: 500, }} />
                </Box>
                <Divider sx={{ width: '100%', marginBottom: 2 }} />


                {selectedIndex !== null && (
                    <List component="nav" sx={{ flexGrow: 1, padding: 0 }}>
                        {renderMenuItems()}
                    </List>
                )}

            </Box>}


            {isMobile && <Button onClick={toggleDrawer(true)} sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: 2,
                position: 'absolute',
                top: 15,
                left: 0,
            }}><MenuIcon /></Button>}

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                {selectedIndex !== null && (
                    <List component="nav" sx={{ flexGrow: 1, padding: 0 }}>
                        {renderMenuItems()}
                    </List>
                )}
            </Drawer>



            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    padding: 2,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            >
                <IconButton onClick={handleAvatarClick}>
                    <Avatar alt="Profile Picture" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" />
                    {
                        iconopen === false && <KeyboardArrowDownIcon sx={{
                            width: "2em",
                            height: "1.5em",
                            color: "#5c5252"
                        }} />
                    }

                    {
                        iconopen === true && <KeyboardArrowUpIcon sx={{
                            width: "2em",
                            height: "1.5em",
                            color: "#5c5252"
                        }} />
                    }
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    sx={{ left: -20 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, ml: 2, mr: 2, mt: 2 }}>
                        <Avatar alt="John Doe" src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" sx={{ width: 56, height: 56 }} />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="h6">John Doe</Typography>
                            <Typography variant="subtitle2" color="text.secondary">
                                UI/UX Designer
                            </Typography>
                        </Box>
                    </Box>

                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account Setting" />
                        </ListItem>
                    </List>

                    <Button
                        variant="text"
                        startIcon={<LogoutIcon sx={{ color: 'red' }} />}
                        fullWidth
                        sx={{ mt: 2, color: 'red', backgroundColor: 'transparent' }}
                    >
                        Logout
                    </Button>
                </Menu>
            </Box>


        </Box >
    );
};

export default Sidebar;