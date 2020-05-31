import {Button, Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    proVersion:{
        backgroundColor:theme.palette.common.wetAsphalt,
        width:"97%",

        color:"white",
        padding:"20px 10px"
    }
}));

export default props=>{
    const classes= useStyles();
    const [hide,setHide] = React.useState(false);
    return(
        <Grid item className={classes.proVersion}>

            <Grid item>
                <Grid container alignItems={"center"}>
                    <Grid item>
                        <Typography variant={"h3"}>Pro version features</Typography>
                    </Grid>
                    <Grid item style={{marginLeft:"auto"}}>
                        <Button color={"secondary"} onClick={()=>setHide(!hide)} variant={"contained"}>
                            {
                                hide ? "Show" : "hide"
                            }
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <br/>
            {
                !hide ? (<Grid item container direction={"column"}>
                    <Grid item>
                        <Typography variant={"subtitle6"} component={"p"}>
                            1- Add Unlimited Website Credentials
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={"subtitle6"} component={"p"}>
                            2- Get notification when unknown device is access your account
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={"subtitle6"} component={"p"}>
                            3- Used with mobile applications
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={"subtitle6"} component={"p"}>
                            4- File Encryption
                        </Typography>
                    </Grid>
                </Grid>): ""
            }

        </Grid>
    )
}
