import React from "react";
import {Grid, Typography, useMediaQuery} from "@material-ui/core";
import {TopBar} from "../../components";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import contentbg from "../../assets/images/contentbg.jpg";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    container:{
      overflow:"hidden",
    },
    content:{
       height:"80vh",
       width:"100vw",
       backgroundImage:`url(${contentbg})`
    }


}));

const Home = props=>{
    const classes = useStyles();
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction={"column"} className={classes.container}>
            <Grid item container>
                <Grid item>
                    <TopBar/>
                </Grid>
            </Grid>

            <Grid item container className={classes.content} direction={"column"} justify={"center"} alignItems={"center"}>
               <Grid item style={{margin:!xs ? "25px" : "25px auto"}}>
                   <Typography variant={xs ? "h5":"h1"} style={{fontSize:xs? "32px":undefined}}>
                       Generate Password
                   </Typography>
               </Grid>

                <Grid item  style={{width:!xs ? "60%": "80%",margin:xs ? "0 auto 0 15px": undefined}}>
                    <input  style={{fontSize:20,width:"100%",border:"1px solid black",padding:20,outline:"none"}}/>
                </Grid>


            </Grid>


        </Grid>
    )
};

export default Home;
