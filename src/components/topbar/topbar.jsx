import React from "react";
import {Grid,Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/styles";


const useStyles = makeStyles(theme=>({
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
}));

const TopBar = props=>{
    const classes = useStyles();
    const theme = useTheme();
    const xs = theme.breakpoints.down("xs");
    return(
        <Grid container alignItems={"center"} className={classes.topBarContainer}>
            <Grid item>
                <Typography variant={"h5"}>
                    <span className={classes.iconSecure}>SECURE </span> things
                </Typography>

            </Grid>

            <Grid item style={{margin:!xs ?"0 10px 0 auto" : "0 5px 0 auto",cursor:"pointer"}}>
                <Typography variant={"h6"}>
                    Login
                </Typography>

            </Grid>
            <Grid item style={{margin:!xs ? "0 10px 0 5px" : "0 5px 0 5px",cursor:"pointer"}}>
                <Typography variant={"h6"}>
                    Sign up
                </Typography>
            </Grid>

        </Grid>
    )
}

export default TopBar;
