



import React from 'react';
import clsx from 'clsx';
import { Box } from "@material-ui/core"
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import avatar from "../img/sumit2.jpeg"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ContactMail from '@material-ui/icons/ContactMail';
import DeveloperBoardSharpIcon from '@material-ui/icons/DeveloperBoardSharp';
import Footer from "./Footer"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // background:"#233"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#5D6D7E"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    avatar: {
        display: "block",
        margin: "1.5rem  auto 1rem auto",
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    menuSliderContainer: {

        background: "#CACFD2",
        height: "100%"


    },
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%"


    }
}));



const menuItem = [
    {
        listIcon: <HomeIcon />,
        listText: "Home",
        listpath: "/sumit_mali"
    },
    {
        listIcon: <PersonIcon />,
        listText: "About Me",
        listpath: "/about"
    },
    {
        listIcon: <DeveloperBoardSharpIcon />,
        listText: "Skills",
        listpath: "/skills"
    },
    {
        listIcon: <WorkIcon />,
        listText: "Projects",
        listpath: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact Me",
        listpath: "/contact"

    }
]


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Sumit Mali Portfolio
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <Box className={classes.menuSliderContainer}
                    // onClick={handleDrawerClose}
                    component="div">
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <Avatar className={classes.avatar} src={avatar} alt="Sumit mali Image Unable Upload" />
                    <List>
                        {menuItem.map((IsItem, key) => (
                            <ListItem button key={key} component={Link} to={IsItem.listpath}>
                                <ListItemIcon className={classes.listItem}>
                                    {IsItem.listIcon}
                                </ListItemIcon>
                                <ListItemText className={classes.listItem} primary={IsItem.listText}></ListItemText>
                            </ListItem>

                        ))}
                    </List>
                </Box>
                <Footer className={classes.footer} />
            </Drawer>

        </div>
    );
}
