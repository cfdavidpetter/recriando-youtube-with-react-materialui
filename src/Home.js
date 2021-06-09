import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle  from '@material-ui/icons/AccountCircle';
import Apps  from '@material-ui/icons/Apps';
import MoreVert  from '@material-ui/icons/MoreVert';
import VideoCall  from '@material-ui/icons/VideoCall';


const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.palette.primary.main,
      height: '100vh',
      padding: theme.spacing(2),
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    logo: {
        height: 25,
    },
    icons: {
        paddingRight: theme.spacing(5),
    },
    menuIcons: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    grow: {
        flexGrow: 1,
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcons} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src='/images/preto.png' alt='logo' className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.icons} color="inherit" >
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit" >
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit" >
                        <MoreVert />
                    </IconButton>
                    <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>FAZER LOGIN</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Home;
