import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const listItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "People", icon: <PeopleIcon /> },
  { text: "Matters", icon: <WorkIcon /> },
  { text: "Events", icon: <CalendarMonthIcon /> },
  { text: "Learning", icon: <SchoolIcon /> },
];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: 8,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          {listItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
