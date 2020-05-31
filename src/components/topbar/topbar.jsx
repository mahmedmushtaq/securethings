
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid, Hidden} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position:"fixed",
        width:"100%",


    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    topBarContainer:{
        padding:"20px 40px",
        width:"100vw",
        [theme.breakpoints.down("xs")]:{
            padding:"20px 10px",
        },


    },
    iconSecure:{

        color:theme.palette.primary.main,
        padding:"2px",
        margin:3,
        [theme.breakpoints.down("xs")]:{
            margin:1,
        },

    },
    rightSide:{
        margin:"0 10px 0 auto",
        [theme.breakpoints.down("xs")]:{
            margin: "0 5px 0 auto",
        },
        cursor:"pointer"
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="fixed" style={{background:"white",color:"black"}}>
                <Toolbar>

                    <Typography variant={"h5"} component={Link} to={"/"}>
                        <span className={classes.iconSecure}>SECURE </span> things
                    </Typography>

                    {
                        !props.dashboard ? (<div  className={classes.rightSide}>

                            <Typography variant={"h6"} component={Link} to={"/login"} className={classes.menuButton}>
                                Login
                            </Typography>


                            <Typography variant={"h6"} component={Link} to={"/sign-up"} className={classes.menuButton} >
                                Sign up
                            </Typography>


                            <Typography variant={"h6"} component={Link} to={"/dashboard"} className={classes.menuButton}>
                                Dashboard
                            </Typography>




                        </div>):(<div className={classes.rightSide}>


                            <Typography variant={"h6"} component={Link} to={"/"} className={classes.menuButton}>
                                Home
                            </Typography>

                            <Hidden lgUp>
                                <IconButton
                                    color="inherit"
                                    onClick={props.onSidebarOpen}
                                    className={classes.menuButton}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>




                        </div>)
                    }




                </Toolbar>
            </AppBar>
        </div>
    );
}
