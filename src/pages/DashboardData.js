import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LeaveIcon from '@mui/icons-material/EventAvailable';
import AttendanceIcon from '@mui/icons-material/AccessTime';
import TimesheetIcon from '@mui/icons-material/Today';
import WorkLogIcon from '@mui/icons-material/Work';
import ReimbursementIcon from '@mui/icons-material/MonetizationOn';
import ReportIcon from '@mui/icons-material/Assessment';
import ExpenseIcon from '@mui/icons-material/Receipt';
import IncomeIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

function DashboardData() {
    return (
        <List component="nav" sx={{ flexGrow: 1, padding: 0 }}>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, padding: '10px 20px', color: "#474757", fontWeight: 500 }}
            >
                My Options
            </Typography>
            <ListItemButton sx={{ padding: '10px 20px' }} >
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <DashboardIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <FeedbackIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Feedbacks" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <LeaveIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Leaves" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <AttendanceIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Attendance" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <TimesheetIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Daily Timesheet" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <WorkLogIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Work Log" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <ReimbursementIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Reimbursements" sx={{ color: '#757575' }} />
            </ListItemButton>

            <Divider sx={{ my: 2 }} />

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <ReportIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Reports" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <ExpenseIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="My Expenses" sx={{ color: '#757575' }} />
            </ListItemButton>

            {/* <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <IncomeIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Income" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <CategoryIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Categories" sx={{ color: '#757575' }} />
            </ListItemButton>

            <ListItemButton sx={{ padding: '10px 20px' }}>
                <ListItemIcon sx={{ marginRight: "-20px" }}>
                    <SettingsIcon sx={{ color: '#757575' }} />
                </ListItemIcon>
                <ListItemText primary="Settings" sx={{ color: '#757575' }} />
            </ListItemButton> */}
        </List>
    )
}

export default DashboardData




